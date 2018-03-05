import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})

/**
 * This is the bootstrap class and also getting the
 * data from the service and initializing the data to
 * ads of AdItem class
 */
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    //Calling the getAds() method of AdService and collecting data from it.
    this.ads = this.adService.getAds();
  }
}

