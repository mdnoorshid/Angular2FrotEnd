import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiterDivPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fiter-div',
  templateUrl: 'fiter-div.html',
})
export class FiterDivPage {
  @Input() toppingsArr: any;
  @Input() showFilterDiv: boolean = false;
  @Output() showFilterDivChild = new EventEmitter<boolean>();

  localFilterShow: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiterDivPage');
  }

  closeDivFilter(index) {
    console.log("toppingsArr:: " + JSON.stringify(this.toppingsArr) + " , index:: " + index);
    if (index !== -1) {
      this.toppingsArr.splice(index, 1);
    }
   
    console.log("toppingsArr lenght:: " + this.toppingsArr.length);
    if (this.toppingsArr.length == 0) {
      console.log("emitting value showFilterDiv");
      this.showFilterDivChild.emit((this.showFilterDiv==false));
    }
    console.log("ToppingsArr after removing filter object:: "+JSON.stringify(this.toppingsArr));
  }

}
