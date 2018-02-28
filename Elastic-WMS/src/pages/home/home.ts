import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController, Platform, PopoverController } from 'ionic-angular';
import { FilterPopOverPage } from '../filter-pop-over/filter-pop-over';
import { FiterDivPage } from '../fiter-div/fiter-div';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  toppings = {};
  showFilterDiv: boolean = false;

  showPopOverBtn: boolean = false;

  showMainFilterLocalDiv: boolean = true;

  toppingArr = [];
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public popoverController: PopoverController,
    public platForm: Platform) {

  }

  ngOnInit() {
    this.getShowPropertyOfPopOver(() => {
      console.log(".inside ngOnInit method");
      if (this.platForm.is('android') || this.platForm.is('ios') || this.platForm.is('mobileweb')
        || this.platForm.is('iphone') || this.platForm.is('mobile') || this.platForm.is('mobileweb') ||
        this.platForm.is('phablet') || this.platForm.is('tablet')) {
        this.showPopOverBtn = true;
      } else {
        this.showPopOverBtn = false;
      }

    });
    console.log("value of showPopOverBtn: " + this.showPopOverBtn);
  }


  getShowPropertyOfPopOver(fn) {

    this.platForm.ready().then(fn);
  }

  presentPopOver(anyEvent) {
    let popOver = this.popoverController.create(FilterPopOverPage, { showNavbar: true });
    popOver.present({
      ev: anyEvent
    });
  }

  addMore() {
    // if (this.toppingArr.indexOf(this.toppings) == -1 && this.toppings != '{}') {
      console.log("is object empty:: "+this.isEmptyObject(this.toppings));
      if(!this.isEmptyObject(this.toppings)){
      this.toppingArr.push(this.toppings);
    } 
    this.toppings = {};
    console.log("toppingArr:: " + JSON.stringify((this.toppingArr)));
    if (this.toppingArr.length > 0) {
      this.showFilterDiv = true;
      console.log("inside if condition:: " + this.showFilterDiv);
    }
    if(!this.isEmptyObject(this.toppings)){
      this.showMainFilterLocalDiv = true;
    }
  }

  closeMainFilterDivBasedOnChild(valueReceived: boolean) {
    this.showFilterDiv = valueReceived;
    console.log("Value received in closeMainFilterDivBasedOnChild method:: " + this.showFilterDiv);
  }

  closeMainDivFilter() {
    this.showMainFilterLocalDiv = false;
    if (this.toppingArr.length !== 0) {
      this.toppingArr.splice(0, this.toppingArr.length);
    }
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
