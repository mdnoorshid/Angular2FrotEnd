import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChildComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child-component',
  templateUrl: 'child-component.html',
})
export class ChildComponentPage {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

   employee : any = {
     name : "Md Noorshid",
     designation : "Software Developer",
     experience:"2 Years" 
   }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  onClick():void{
    this.notify.emit(this.employee);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildComponentPage');
  }

  ngOnInit(){
    console.log("calling ngOnInit .....");
  }

}
