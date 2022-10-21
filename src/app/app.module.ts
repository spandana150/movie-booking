import { APP_BASE_HREF } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingComponent } from './components/booking/booking.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { UpdateComponent } from './components/update/update.component';
//import { UpdateComponent } from './components/update/update.component'; 


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BookingComponent,
    DisplayComponent,
    DisplayComponent,
    UpdateComponent,
    //UpdateComponent,
     ],
     imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      
    ],
  providers: [{provide: APP_BASE_HREF , useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
