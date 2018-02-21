import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userText: string = "";
  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit(){
  console.log(".inside home.ts ngViewInit method...");
}

}
