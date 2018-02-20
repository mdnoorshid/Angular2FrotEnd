import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../home/service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('employeeTable') el: ElementRef;
  empData: any;
  userId: string[];
  jobTitleName: string[];
  firstName: string[];
  lastName: string[];
  preferredFullName: string[];
  employeeCode: string[];
  region: string[];
  phoneNumber: string[];
  emailAddress: string[];

  filePath: string;


  constructor(public service: Service) {

  }

  public getEmployees() {
    console.log("inside getEmployee:: ");
    this.empData = this.service.getEmployeeData();
    this.empData = this.empData.Employees;
    console.log("empData received::: " + JSON.stringify(this.empData));

    this.userId = [];
    this.jobTitleName = [];
    this.firstName = [];
    this.lastName = [];
    this.preferredFullName = [];
    this.employeeCode = [];
    this.region = [];
    this.phoneNumber = [];
    this.emailAddress = [];

    for (let i = 0; i < this.empData.length; i++) {
      this.userId.push(this.empData[i].userId);
      this.jobTitleName.push(this.empData[i].jobTitleName);
      this.firstName.push(this.empData[i].firstName);
      this.lastName.push(this.empData[i].lastName);
      this.preferredFullName.push(this.empData[i].preferredFullName);
      this.employeeCode.push(this.empData[i].employeeCode);
      this.region.push(this.empData[i].region);
      this.phoneNumber.push(this.empData[i].phoneNumber);
      this.emailAddress.push(this.empData[i].emailAddress);
    }

    return this.empData;
  }

  ngOnInit() {
    console.log("inside ngOnInit method.......");
    this.getEmployees();
  }

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    useBom: true,
    headers: ['userId', 'jobTitleName', 'firstName', 'lastName', 'preferredFullName', 'employeeCode', 'region', 'phoneNumber', 'emailAddress']
  };

  public getData() {
    console.log(".inside getData method......");
    this.empData = this.service.getEmployeeData();
    return this.empData;
  }


  public convertJsonDataToCsv() {
    let empData = this.getData();
    console.log("convertJsonDataToCsv:::: " + JSON.stringify(empData));
    //this.filePath="C:\\Users\\mdnoo\\Desktop\\test";
    new Angular2Csv(empData.Employees, "employees", this.options);
  }

  public saveAsPdf() {
    let pdf = new jsPDF();
    console.log("pdf object:: " + pdf);
    let options = {
      pagesplit: true
    };
    pdf.setTextColor(255,255,255);
    pdf.setFontSize(18);
                    pdf.setTextColor(255,255,255);
                    pdf.setFontStyle('normal');
    pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
      pdf.save("employee.pdf");
    });
  }

}
