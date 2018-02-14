import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  myData:any;
  constructor(private view: ViewController, public navParams: NavParams) {
  }

  closeModal(){
    const myData={
    value:"successful"
    }
  this.view.dismiss(myData);

  }


  ionViewWillLoad() {
    console.log('ionViewDidLoad ModalPage');
     this.myData= this.navParams.get("data");
    console.log(this.myData);
  }

}
