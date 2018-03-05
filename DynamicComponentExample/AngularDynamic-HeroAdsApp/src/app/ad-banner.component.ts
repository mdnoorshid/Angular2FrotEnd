import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  /**
   * Method which is responsible for creating dynamic 
   * component.
   */
  loadComponent() {
    console.log("inside load component....., ads.length:: "+this.ads.length);
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    console.log("current index:: "+this.currentAdIndex);
    console.log("ads---> "+JSON.stringify(this.ads));
    let adItem = this.ads[this.currentAdIndex];
    console.log("adItem:: "+JSON.stringify(adItem));
    
    //Getting the component and putting it into componentFactory
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  /** 
   * Setting the interval for calling loadComponent()
   * method
  */
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1500);
  }
}
