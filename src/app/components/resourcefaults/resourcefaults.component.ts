import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Resource} from "../../model/Resource";
import {ResourceApi} from "../../api/ResourceApi";
import {ResourceFaultApi} from "../../api/ResourceFaultApi";
import {ResourceFault} from "../../model/ResourceFault";

import "rxjs/add/operator/toPromise";

@Component({
  selector: "comp_resourcefaults",
  templateUrl: "./resourcefaults.component.html",
  styleUrls: ["./resourcefaults.component.css"]
})

export class ResourceFaultsComponent implements OnInit {
  message: String = "";

  actResourceFault: ResourceFault = {};
  actResourceFaultUpdate: ResourceFault = {};
  actCommentToAppend: String = "";

  resources: Resource[] = [];
  resourceFaults: ResourceFault[] = [];

  constructor(private resourceApi: ResourceApi,
              private resourceFaultsApi: ResourceFaultApi) {
  }


  ngOnInit(): void {
    this.updateResources();
  }

  public onResourceFaultFormSubmit() {
    if (this.actResourceFault.resourceFaultID == null) {
      /* Add new */
      this.resourceFaultsApi.resourcefaultPost(this.actResourceFault)
        .toPromise()
        .then(data => {
          console.log(data);
          this.actResourceFault = {};
          this.updateResources();
          this.message = "Új hibajegy felvéve!";
        });
    }
  }


  private updateResources() {
    this.resourceApi.resourcesGet()
      .toPromise()
      .then(resources => this.resources = resources);

    this.resourceFaultsApi.resourcefaultsGet()
      .toPromise()
      .then(resourceFaults => this.resourceFaults = resourceFaults);
  }

  public showModal(rf: ResourceFault) {
    this.actResourceFaultUpdate = rf;
  }

  public submitModal() {
    this.actResourceFaultUpdate.longDescription += "---" + this.actCommentToAppend;
    this.resourceFaultsApi.resourcefaultResourcefaultIDPut(this.actResourceFaultUpdate.resourceFaultID, this.actResourceFaultUpdate)
      .toPromise()
      .then(data => {
        console.log(data);
        this.actResourceFaultUpdate = {};
        this.actCommentToAppend = "";
        this.message = "Hibajegy frissítve";
      })
  }

}
