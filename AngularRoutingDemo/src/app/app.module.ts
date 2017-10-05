import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './register/register.component';
import { AppComponent } from './app.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,AboutComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
