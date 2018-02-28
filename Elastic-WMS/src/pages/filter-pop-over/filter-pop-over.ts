import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-pop-over',
  templateUrl: 'filter-pop-over.html',
})
export class FilterPopOverPage {
  toppings = {};
  toppingArr = [];
  showMainFilterLocalDiv: boolean = true;
  showFilterDiv : boolean = false ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPopOverPage');
  }

  addMore() {
    console.log("is empty object: "+this.isEmptyObject(this.toppings));
    if(!this.isEmptyObject(this.toppings)){
      this.toppingArr.push(this.toppings);
    } 
    this.toppings = {};
    console.log("toppingArr:: " + JSON.stringify((this.toppingArr)));
    if (this.toppingArr.length > 0) {
      this.showFilterDiv = true;
      console.log("inside if condition:: " + this.showFilterDiv);
    }
    this.showMainFilterLocalDiv = true;
  }

  closeMainFilterDivBasedOnChild(valueReceived:boolean){
    this.showFilterDiv = valueReceived;
    console.log("Value received in closeMainFilterDivBasedOnChild method:: "+this.showFilterDiv);
  }

  closeMainDivFilter(){
    this.showMainFilterLocalDiv = false;
    if (this.toppingArr.length !== 0) {
     this.toppingArr.splice(0,this.toppingArr.length);
   }
   }

   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }


}
