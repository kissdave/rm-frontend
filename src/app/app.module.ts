import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {RequestsComponent} from "./components/requests/requests.component";
import {RequestApi} from "./api/RequestApi";
import {RequestComponent} from "./components/request/request.component";
import {ResourceTypeApi} from "./api/ResourceTypeApi";
import {ResourceFaultApi} from "./api/ResourceFaultApi";
import {ResourceApi} from "./api/ResourceApi";
import {ResourcesComponent} from "./components/resources/resources.component";
import {ResourceFaultsComponent} from "./components/resourcefaults/resourcefaults.component";
import {LoansComponent} from "./components/loans/loans.component";
import {LoanApi} from "./api/LoanApi";
import {CardApi} from "./api/CardApi";
import {UsersApi} from "./api/UsersApi";
import {DatePipe} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'request/:id', component: RequestComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'resources/faults', component: ResourceFaultsComponent},
  {path: 'loans', component: LoansComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    RequestsComponent,
    ResourcesComponent,
    ResourceFaultsComponent,
    LoansComponent
  ],
  providers: [
    RequestApi,
    ResourceTypeApi,
    ResourceFaultApi,
    ResourceApi,
    LoanApi,
    CardApi,
    UsersApi,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
