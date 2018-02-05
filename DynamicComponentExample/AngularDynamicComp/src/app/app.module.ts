//our root app component
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,AdBannerComponent,HeroJobAdComponent,HeroProfileComponent,AdDirective
  ],
  providers: [ AdService ],
  entryComponents: [ HeroJobAdComponent,HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(){}
}