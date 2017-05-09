import {Component, Input, OnInit} from "@angular/core";
import {Request} from "../../model/Request";
import {RequestApi} from "../../api/RequestApi";


import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";

import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/switchMap';
import {Response} from "@angular/http";
import {ResourceType} from "../../model/ResourceType";
import {ResourceTypeApi} from "../../api/ResourceTypeApi";
import {Resource} from "../../model/Resource";
import {ResourceApi} from "../../api/ResourceApi";

@Component({
  selector: "comp_request",
  templateUrl: "./request.component.html"
})

export class RequestComponent implements OnInit {
  message: string = "";

  request: Request = {};

  selectedResourceType: ResourceType = {};
  resouceTypes: ResourceType[] = [];
  resources: Resource[] = [];

  constructor(private requestApi: RequestApi,
              private resourceApi: ResourceApi,
              private resourceTypeApi: ResourceTypeApi,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }


  ngOnInit(): void {

    this.resourceTypeApi.resourcetypesGet()
      .toPromise()
      .then(resourceTypes => this.resouceTypes = resourceTypes);


    this.route.params.subscribe((params: Params) => {
      let requestID = params['id'];
      if (requestID != 0) {
        this.requestApi.requestRequestIDGet(requestID)
          .toPromise()
          .then(request => this.request = request)
          .catch(this.handleError);
      }
    })
  }

  private handleError(error: any): Promise<any> {
    this.message = error;
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }

  public updateResources() {
    this.resources = [];
    this.resourceApi.resourcesGet()
      .toPromise()
      .then(resources => this.resources = resources);

    this.resources = this.resources.filter(resource => resource.resourceType.resourceTypeID === this.selectedResourceType.resourceTypeID);
  }

  public submitRequest() {
    if(this.request.requestID == null || this.request.requestID == 0) {
      this.requestApi.requestPost(this.request)
        .toPromise()
        .then(data => {
          this.message = "Foglalás beküldve. A foglalás feldolgozását megkezdtük, az oldalon követhető az állapota.";
          this.request = {};

          this.router.navigateByUrl('requests');
        })
        .catch(ex => {
          this.handleError(ex);
        });
    } else {
      this.requestApi.requestRequestIDPut(this.request.requestID, this.request)
        .toPromise()
        .then(data => {
          this.message = "Foglalás beküldve. A foglalás feldolgozását megkezdtük, az oldalon követhető az állapota.";
          this.request = {};

          this.router.navigateByUrl('requests');
        })
        .catch(ex => {
          this.handleError(ex);
        });
    }
  }
}
