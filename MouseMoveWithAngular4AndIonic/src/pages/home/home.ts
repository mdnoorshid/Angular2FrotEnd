import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable, Observer } from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {



  constructor(public navCtrl: NavController) {

  }

  mouseEventObservable = Observable.fromEvent(window, 'mousemove');

  observer = {
    next: function (value) {
      let finalArray = [];
      let obj = { X: value.clientX, Y: value.clientY };
      console.log(obj);
      document.getElementById("xAxis").innerHTML = "X: " + obj.X;
      document.getElementById("yAxis").innerHTML = "Y: " + obj.Y;

      // document.getElementById("tdX").innerHTML = obj.X;
      // document.getElementById("tdY").innerHTML = obj.Y;

    }
  }

  showMouseMove() {
    return this.mouseEventObservable.subscribe(this.observer);
  }

  ngOnInit() {
    this.showMouseMove();
    console.log(this.observer.next);

  }

}
