import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppHeading} from './heading/app.heading';
import {HttpClientModule} from '@angular/common/http';
import {AppDataService} from '../app/service/app.service';
import {Pagelist} from '../app/pagelist/app.pagelist';

@NgModule({
  declarations: [
    AppComponent,AppHeading,AppDataService,Pagelist
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
