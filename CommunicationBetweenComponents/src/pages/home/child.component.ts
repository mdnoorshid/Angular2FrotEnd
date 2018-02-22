import { Component , Input, OnInit ,Output} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataService} from '../home/data.service';

@Component({
    selector: 'child-page',
    template: `<p>Message from parent <span style="color:blue">{{message}}</span> </p>
    <ion-item>
    <ion-label color="primary" >Send message to Parent</ion-label>
    <ion-input name="tel" [(ngModel)]="messageToparent" placeholder="Enter your message"></ion-input>
  </ion-item>
    `
  })


export class ChildComponent {
    @Input() message:string;
 
    messageFromChild:string = "I am fine my parent!!";
    messageToparent:string;

    constructor(private dataService : DataService){

    }

    ngOnInit(){
    }

    newMessage(){
        console.log("inside newMessage messageToparent:: "+this.messageToparent);
        this.dataService.changeMessage(this.messageToparent);
    }

     /**
     * ngDoCheck is triggered every time the input properties of a component or a directive are checked. 
     */
    ngDoCheck() {
        console.log(".inside ngDoCheck() method.....");
         this.newMessage();
        }
}