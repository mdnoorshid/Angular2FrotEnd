import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model = {};
  public showBookedTicket: boolean = false;
  constructor(public navCtrl: NavController, private http: HttpClient, public alertCtrl: AlertController) {
  }

  public booTicket() {
    console.log(".inside bookTicket........");
    let url = "http://192.168.1.45:8431/api/tickets/create";
    console.log(this.model);
    let body = JSON.stringify(this.model);
    console.log(body);

    return this.http.post(url, body, {
      headers: new HttpHeaders().set("Content-Type", 'application/json'),
    }).subscribe(
      res => {
        console.log(res);
        this.showConfirmationBooking(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
      );
  }

  showConfirmationBooking(res) {
    this.model={};
    console.log(".inside showConfirmationBooking() method......");
    let alert = this.alertCtrl.create({
      title: 'Confirmation Booking',
      subTitle: 'Hi ' + res.passengerName.toUpperCase() + ' you have successfully booked your ticket, your ticket Id is: ' + res.ticketId,
      buttons: ['OK']
    });
    alert.present();
  }
  public isClear: boolean = false;
  clearFields() {
    this.isClear = true;
  }

  public myDetails: any;

  public getTicketById(ticketId) {
    console.log("inside getTicketById method.....")
    let url = "http://192.168.1.45:8431/api/tickets/ticket/" + ticketId;
    console.log(url);
    return this.http.get(url).subscribe(
      res => {
        // console.log(res);
        this.myDetails = res;
        console.log("myDetails value:::  ");
        console.log(this.myDetails);
        this.showBookedTicket = true;
        console.log("showBookedTicket value:: ");
      },
      (err: HttpErrorResponse) => {
        this.showIdDoesNotExist();
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

  checkTicketPrompt() {
    this.model={};
    this.showBookedTicket = false;
    let prompt = this.alertCtrl.create({
      title: 'Check your Ticket',
      message: "Enter your ticket id to check your details",
      inputs: [
        {
          name: 'ticketId',
          placeholder: 'Ticket Id'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Check',
          handler: data => {
            console.log('Checked clicked');
            console.log(data);
            this.getTicketById(data.ticketId);

            console.log(this.showBookedTicket);
          }
        }
      ]
    });
    prompt.present();
  }

  closeDisplayTicket() {
    this.showBookedTicket = false;
  }

  askConfirmDelete() {
    let confirm = this.alertCtrl.create({
      title: 'Sure to delete your ticket?',
      message: 'Hi ' + this.myDetails.passengerName + ' you are about to delete your ticket!!',
      buttons: [
        {
          text: 'NO',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'YES',
          handler: () => {
            console.log('Agree clicked');
            this.deleteMyTicket(this.myDetails.ticketId);
            this.showBookedTicket = false;
            console.log("showBookedTicket value:: ");
            // this.showConfirmationDelete(this.myDetails);
  

          }
        }
      ]
    });
    confirm.present();
  }

  deleteMyTicket(ticketId) {
    console.log("inside getTicketById method.....")
    let url = "http://192.168.1.45:8431/api/tickets/ticket/" + ticketId;
    console.log(url);
    return this.http.delete(url).subscribe(
      res => {
        console.log(res);
        // if(res===200){
          this.showConfirmationDelete(this.myDetails);
        // }else{
        //   this.showUnableToDelete(this.myDetails);
        // }

          // this.showBookedTicket = false;
          // console.log("showBookedTicket value:: ");
          // this.showConfirmationDelete(this.myDetails);
      },
      (err: HttpErrorResponse) => {
        // this.showUnableToDelete(this.myDetails);
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

  showConfirmationDelete(myDetails) {
    let alert = this.alertCtrl.create({
      title: 'Ticket Deleted',
      subTitle: 'Hi ' + myDetails.passengerName.toUpperCase() + ' you have successfully deleted your ticket, your ticket Id was: ' + myDetails.ticketId,
      buttons: ['OK']
    });
    alert.present();
    this.clearFields();
  }

  showUnableToDelete(myDetails) {
    let alert = this.alertCtrl.create({
      title: 'Ticket Deleted',
      subTitle: 'Hi ' + myDetails.passengerName.toUpperCase() + ' We are unable to delete your ticket, try after some time!! ' ,
      buttons: ['OK']
    });
    alert.present();
    this.clearFields();
  }

  showIdDoesNotExist(){
    let alert = this.alertCtrl.create({
      title: 'Ticket Id does not exist',
      subTitle: 'Hi your Ticket Id does not exist!!',
      buttons: ['OK']
    });
    alert.present();
    this.clearFields();
  }

}