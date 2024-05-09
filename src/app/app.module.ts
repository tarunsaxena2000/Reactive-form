import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFormComponent } from './components/my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
MyFormComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
