import { Component } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {AppDataService} from '../service/app.service'

@Component({
    selector: 'app-pagelist',
    templateUrl: './app.pagelist.html',
    styleUrls: ['./app.pagelist.css']
  })

  export class Pagelist{

    constructor(private http:HttpClient){
    // alert("inside pageList constructor!!");
    }
      smlistData;
      srdatalist
    actRequestId:string[];
    source:string[];
    date:string[];
    customer:string[];
    location:string[];
    priority:string[];
    contact:string[];
    phone:string[];
    problemDescription:string[];
    status:string[];

        ngOnInit():void{
             console.log("calling ngOnInot..");
             new AppDataService(this.http).getSmlistDataService().subscribe(data=>{
             this.smlistData=data;
           //  console.log("smlistData---> "+JSON.stringify(this.smlistData));
             this.srdatalist=this.smlistData.SRData;
             //console.log("srdatalist---> "+JSON.stringify(this.srdatalist));
              
             //making all array empty before getting inside for loop
             this.actRequestId=[];
             this.source=[];
             this.source=[];
             this.date=[];
             this.customer=[];
             this.location=[];
             this.priority=[];
             this.contact=[];
             this.phone=[];
             this.problemDescription=[];
             this.status=[];
        
             //looping through srdatalist and pushing the required values into required array of fields
        for(let i=0;i<this.srdatalist.length;i++){
           this.actRequestId.push(this.srdatalist[i].SourceRequestID);
           this.source.push(this.srdatalist[i].Source);
           this.date.push(this.srdatalist[i].RequestedDate);
           this.customer.push(this.srdatalist[i].SourceRequestID);
           this.location.push(this.srdatalist[i].Location);
           this.priority.push(this.srdatalist[i].Priority);
           this.contact.push(this.srdatalist[i].Contact);
           this.phone.push(this.srdatalist[i].Phone);
           this.problemDescription.push(this.srdatalist[i].ProblemDescription);
           this.status.push(this.srdatalist[i].Status);
        }
         
        console.log("actRequestId:: "+JSON.stringify(this.actRequestId));
        console.log("source:: "+JSON.stringify(this.source));
        console.log("date:: "+JSON.stringify(this.date));
        console.log("customer:: "+JSON.stringify(this.customer));
        console.log("location:: "+JSON.stringify(this.location));
        console.log("priority:: "+JSON.stringify(this.priority));
        console.log("contact:: "+JSON.stringify(this.contact));
        console.log("phone:: "+JSON.stringify(this.phone));
        console.log("problemDescription:: "+JSON.stringify(this.problemDescription));
        console.log("status:: "+JSON.stringify(this.status));
        });
     
    }


  }