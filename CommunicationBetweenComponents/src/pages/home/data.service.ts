import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class DataService{

    private messageService = new BehaviorSubject<string>("default message!!");
    currentMessage = this.messageService.asObservable();

    constructor(){}

    changeMessage(message : string){
    this.messageService.next(message);
    }


}
