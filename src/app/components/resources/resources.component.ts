import {Component, OnInit} from "@angular/core";
import {Resource} from "../../model/Resource";
import {ResourceApi} from "../../api/ResourceApi";
import {ResourceTypeApi} from "../../api/ResourceTypeApi";

import "rxjs/add/operator/toPromise";
import {ResourceType} from "../../model/ResourceType";

@Component({
  selector: "comp_resources",
  templateUrl: "./resources.component.html"
})

export class ResourcesComponent implements OnInit {
  message: String = "";

  actResource: Resource = {};
  actResourceType: ResourceType = {};

  resources: Resource[] = [];
  resourceTypes: ResourceType[] = [];

  constructor(private resourceApi: ResourceApi,
              private resourceTypeApi: ResourceTypeApi) {
    this.resetActResource();
  }


  ngOnInit(): void {

    this.updateResources();

  }

  public onSubmitResourceTypeForm() {
    this.message = "";
    if (this.actResourceType.resourceTypeID == null) {
      /* Adding a new */
      this.resourceTypeApi.resourcetypePost(this.actResourceType)
        .toPromise()
        .then(data => {
          console.log(data);
          this.updateResources();
          this.actResourceType = {};
          this.message = "Új erőforrástípus sikeresen hozzáadva.";
        });
    }
    else {
      /* Updating existing type */
      this.resourceTypeApi.resourcetypeResourcetypeIDPut(this.actResourceType.resourceTypeID, this.actResourceType)
        .toPromise()
        .then(data => {
          console.log(data);
          this.updateResources();
          this.actResourceType = {};
          this.message = "Erőforrástípus módosítása megtörtént.";
        });
    }
  }

  public onSubmitResourceForm() {
    this.message = "";
    if(this.actResource.resourceID == null) {
      /* Adding a new */
      this.actResource.resourceType.resources = [];
      this.resourceApi.resourcePost(this.actResource)
        .toPromise()
        .then(data => {
          console.log(data);
          this.updateResources();
          this.actResource = {};
          this.message = "Új erőforrás hozzáadva";
        });
    }
    else {
      /* Updating existing resource */
      this.actResource.resourceType.resources = [];
      this.resourceApi.resourceResourceIDPut(this.actResource.resourceID, this.actResource)
        .toPromise()
        .then(data => {
          console.log(data);
          this.updateResources();
          this.actResource = {};
          this.message = "Erőforrás sikeresen módosítva.";
        })
    }
  }

  private updateResources() {
    this.resourceTypeApi.resourcetypesGet()
      .toPromise()
      .then(resourcesTypes => this.resourceTypes = resourcesTypes);

    this.resourceApi.resourcesGet()
      .toPromise()
      .then(resources => this.resources = resources);
  }

  public setResourceType(resourceType: ResourceType) {
    this.actResourceType = resourceType;
  }

  public setResource(resource: Resource) {
    this.actResource = resource;
  }

  private resetActResource() {
    this.actResource.resourceType = {};
    this.actResource.requests = [];
    this.actResource.resourceFaults = [];
    this.actResource.archived = false;
    this.actResource.active = false;
  }
}
