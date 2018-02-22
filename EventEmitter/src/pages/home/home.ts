import { Component ,Output} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employee:any;
  constructor(public navCtrl: NavController) {
  }

  /**
   * Getting data from child component
   * @param message 
   */
  onNotifyClicked(objectRecieved:string):void{
    console.log(".inside onNotifyClicked method......");
     this.employee= objectRecieved;
     console.log("Employee:: "+JSON.stringify(this.employee));
  }


}
