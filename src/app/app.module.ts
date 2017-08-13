import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MomentModule} from "angular2-moment";
import { AppComponent } from './app.component';
import {RoundPipe} from "ngx-pipes/src/app/pipes/math/round";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule,MdInputModule,MdDatepickerModule} from "@angular/material";
import {MdNativeDateModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    RoundPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MomentModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule












],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
