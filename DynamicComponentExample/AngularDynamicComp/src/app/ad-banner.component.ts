import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

/**
 * Most of the ad banner implementation is in ad-banner.component.ts.
 * 
 * The <ng-template> element is where we apply the directive we just made.
 * The <ng-template> element is a good choice for dynamic components because it doesn't render
 * any additional output.
 */
@Component({
  selector:'app-add-banner',
  template:`
          <div class="ad-banner">
          <h3>Advertisements</h3>
          <ng-template ad-host></ng-template>
  `    

})
/**
 * AdItem objects specify the type of component to load and any data to bind to the component.
 * AdService returns the actual ads making up the ad campaign.
 */
export class AdBannerComponent implements AfterViewInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    subscription: any;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAddIndex];

        let componentFactory =
            this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}