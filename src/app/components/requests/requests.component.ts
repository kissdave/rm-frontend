import {Component, OnInit} from "@angular/core";

import {Request} from "../../model/Request";
import {RequestApi} from "../../api/RequestApi";

import "rxjs/add/operator/toPromise";

@Component({
  selector: "comp_requests",
  templateUrl: "./requests.component.html"
})

export class RequestsComponent implements OnInit {
  requests: Request[] = [];

  constructor(private requestApi: RequestApi) {}


  ngOnInit(): void {
    this.updateRequests();
  }

  public updateRequests() {
    this.requestApi.requestsGet()
      .toPromise()
      .then(requests => this.requests = requests);
  }

  public approve(request: Request) {
    this.requestApi.approveRequestIDPost(request.requestID, true)
      .toPromise()
      .then(data => {
        console.log(data);
        this.updateRequests();
      });
  }

  public decline(request: Request) {
    this.requestApi.approveRequestIDPost(request.requestID, false)
      .toPromise()
      .then(data => {
        console.log(data);
        this.updateRequests();
      });
  }
}
