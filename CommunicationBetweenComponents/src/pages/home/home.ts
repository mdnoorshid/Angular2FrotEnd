import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChildComponent} from '../home/child.component';
import {DataService} from '../home/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  constructor(public navCtrl: NavController,private dataService:DataService) {

  }

  messageFromDataService:string;
  childMessage:string;
  parentMessage = "Hi my child how are you ??";

  @ViewChild(ChildComponent) child ;


  ngAfterViewInit(){
   this.childMessage = this.child.messageFromChild;
   console.log("childMessage:: "+this.childMessage);
  }

ngOnInit(){
  this.dataService.currentMessage.subscribe(message => this.messageFromDataService=message);
}





}
