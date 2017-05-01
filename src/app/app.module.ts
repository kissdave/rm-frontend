import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {RequestsComponent} from "./components/requests/requests.component";
import {RequestService} from "./service/request.service";
import {RequestApi} from "./api/RequestApi";
import {RequestComponent} from "./components/request/request.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'request/:id', component: RequestComponent}
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
    RequestsComponent
  ],
  providers: [RequestApi],
  bootstrap: [AppComponent]
})
export class AppModule {
}
