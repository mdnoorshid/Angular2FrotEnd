import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MyPostBannerComponent } from './mypost-banner.component';
import { ArticleComponent } from './article.component';
import { TechnologyComponent } from './technology.component';
import { MyPostComponent } from './mypost.component';
import { MyPostDirective } from './mypost.directive';
import { MyPostService } from './mypost.service';


@NgModule({
  declarations: [
    AppComponent,
    MyPostBannerComponent,
    ArticleComponent,
    TechnologyComponent,
    MyPostComponent,
    MyPostDirective
  ],
  entryComponents: [
    ArticleComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
