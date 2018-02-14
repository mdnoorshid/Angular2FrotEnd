import { Component } from '@angular/core';
import { ModalController, Modal, ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController) {
  }

  openModal() {

    const myModalOptions: ModalOptions ={
      enableBackdropDismiss: false
    };


    const myData = {
      name: "Md Noorshid",
      occupation: "Software Developer"
    }
    console.log("inside openModal() method....");
    const myModal: Modal = this.modal.create('ModalPage', { data: myData }, myModalOptions);
    myModal.onDidDismiss(data => {
      console.log("have dismissed popUp:: " + JSON.stringify(data));
    });
    myModal.onWillDismiss(data => {
      console.log("will dismiss popup:: " + JSON.stringify(data));
    });
    myModal.present();
  }

}
