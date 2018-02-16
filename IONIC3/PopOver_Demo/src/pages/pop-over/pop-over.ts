import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {
  popOverFormVal = {};
  @Input() showNavbar: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewWillLoad(){
  this.showNavbar=  this.navParams.get("showNavbar");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

}
