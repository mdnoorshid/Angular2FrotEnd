import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopOverPage } from '../pop-over/pop-over';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public window: Window;
  public showPopOverBtn?: boolean;
  constructor(public navCtrl: NavController, public popoverController: PopoverController,
    public platForm: Platform) {

  }

  presentPopOver(myEvent) {
    let popOver = this.popoverController.create(PopOverPage,{showNavbar: true});
    popOver.present({
      ev: myEvent
    });
  }

  ngOnInit() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    console.log("height: " + height + " , width: " + width);
    this.getShowPropertyOfPopOver(() => {
      if (this.platForm.is('android') || this.platForm.is('ios') || this.platForm.is('mobileweb')
         || this.platForm.is('iphone') || this.platForm.is('mobile') || this.platForm.is('mobileweb') ||
         this.platForm.is('phablet') || this.platForm.is('tablet') ) {
          this.showPopOverBtn  = true;
      } else {
        this.showPopOverBtn = false;
      }
     
    });
  
  }

  getShowPropertyOfPopOver(fn) {

    this.platForm.ready().then(fn);


  }
}
