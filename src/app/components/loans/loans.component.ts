import {Component, OnInit, ViewChild} from "@angular/core";
import {Resource} from "../../model/Resource";
import {LoanApi} from "../../api/LoanApi";
import {CardApi} from "../../api/CardApi";
import {ResourceApi} from "../../api/ResourceApi";
import {Loan} from "../../model/Loan";

import "rxjs/add/operator/toPromise";
import {User} from "../../model/User";
import {UsersApi} from "../../api/UsersApi";
import {Card} from "../../model/Card";
import {DatePipe} from "@angular/common";

@Component({
  selector: "comp_loans",
  templateUrl: "./loans.component.html"
})

export class LoansComponent implements OnInit {
  message: string = "";

  actLoan: Loan = {};

  resources: Resource[] = [];
  loans: Loan[] = [];
  users: User[] = [];

  getUserTo: String = "";
  cardNumber: string = "";
  tempCard: Card = {};
  tempUser: User = {};

  constructor(private loanApi: LoanApi,
              private cardApi: CardApi,
              private resourceApi: ResourceApi,
              private usersApi: UsersApi,
              private datepipe: DatePipe) {
    this.resetActLoan();
  }


  ngOnInit(): void {
    this.updateFields();
  }

  private updateFields() {
    this.resourceApi.resourcesGet()
      .toPromise()
      .then(resources => this.resources = resources);
    this.loanApi.loansGet()
      .toPromise()
      .then(loans => this.loans = loans);
    this.usersApi.usersGet()
      .toPromise()
      .then(users => this.users = users);
  }

  public showCardModal(field: String) {
    this.updateFields();
    this.getUserTo = field;
  }

  public onSubmitCardForm() {
    this.cardNumber = this.cardNumber.replace(/[a-zA-ZäöüßÄÖÜ]/g, '');
    this.cardApi.userbycardCardIDGet(this.cardNumber.toString())
      .toPromise()
      .then(data => {
        if (this.getUserTo === "adminOfIssue") {
          this.actLoan.adminOfIssue = data;
        } else if (this.getUserTo === "clientOfIssue") {
          this.actLoan.clientOfIssue = data;
        } else if (this.getUserTo === "adminOfWithdraw") {
          this.actLoan.adminOfWithdraw = data;
        } else if (this.getUserTo === "clientOfWithdraw") {
          this.actLoan.clientOfWithdraw = data;
        }
        this.getUserTo = "";
        this.cardNumber = "";
      });
  }

  public onSubmitTableForm(user: User) {
    if (this.getUserTo === "adminOfIssue") {
      this.actLoan.adminOfIssue = user;
    } else if (this.getUserTo === "clientOfIssue") {
      this.actLoan.clientOfIssue = user;
    } else if (this.getUserTo === "adminOfWithdraw") {
      this.actLoan.adminOfWithdraw = user;
    } else if (this.getUserTo === "clientOfWithdraw") {
      this.actLoan.clientOfWithdraw = user;
    }
    this.getUserTo = "";
  }

  public showCardAddModal(user: User) {
    this.tempUser = user;
  }

  public onSubmitCardAddForm() {
    this.tempCard.cardNum = this.tempCard.cardNum.replace(/[a-zA-ZäöüßÄÖÜ]/g, '');
    this.tempCard.user = this.tempUser;
    this.cardApi.cardPost(this.tempCard)
      .toPromise()
      .then(data => {
        this.tempUser = {};
        this.tempCard = {};
        this.tempCard.user = {};
        console.log("Card added");
      })
  }

  public submitLoan() {
    if (this.actLoan.loanID == null) {
      /* Adding a new */
      this.loanApi.loanPost(this.actLoan)
        .toPromise()
        .then(data => {
          console.log(data);
          this.resetActLoan();
          this.message = "Kölcsönzés rögzítve";
          this.updateFields();
        })
    } else {
      this.loanApi.loanLoanIDPut(this.actLoan.loanID, this.actLoan)
        .toPromise()
        .then(data => {
          console.log(data);
          this.resetActLoan();
          this.message = "Kölcsönzés frissítve";
          this.updateFields();
        })
    }
  }

  public showModal(loan: Loan) {
    this.actLoan = loan;
  }

  private resetActLoan() {
    this.actLoan = {};
    this.actLoan.adminOfIssue = {};
    this.actLoan.clientOfIssue = {};
    this.actLoan.adminOfWithdraw = {};
    this.actLoan.clientOfWithdraw = {};
    this.actLoan.resource = {};
  }
}
