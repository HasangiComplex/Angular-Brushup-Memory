import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {SharedService} from "./services/shared.service";
import {FormsModule} from "@angular/forms";
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import {DatesService} from "./services/dates.service";
import { ServicesWorkComponent } from './components/services-work/services-work.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DataBindingsComponent,
    ServicesWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService,DatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
