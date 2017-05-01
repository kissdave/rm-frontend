import {Component, OnInit} from "@angular/core";

import {Request} from "../../model/Request";
import {RequestService} from "../../service/request.service";
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
    this.requestApi.requestsGet()
      .toPromise()
      .then(requests => this.requests = requests);
  }
}
