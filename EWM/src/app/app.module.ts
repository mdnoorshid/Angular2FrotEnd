import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FilterPopOverPage} from '../pages/filter-pop-over/filter-pop-over';

import {FiterDivPage} from '../pages/fiter-div/fiter-div';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterPopOverPage,
    FiterDivPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterPopOverPage,
    FiterDivPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FiterDivPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
