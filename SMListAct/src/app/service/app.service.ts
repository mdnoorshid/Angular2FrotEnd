import { Component,Directive } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-service',
    templateUrl: './app.service.html',
    styleUrls: ['./app.service.css']
  })


export class AppDataService {
    constructor(private http:HttpClient){
   //alert(".inside AppDataService Construnctor.....");
    }
    smlistData;
    public getSmlistDataService():Observable<any>{
      //  alert(".inside getSmlistDataService ");
        let url="http://localhost:9060/ecomm/rest/sacGroup/sac/SMListNewServiceRequest";
        let body='{"tenantId":"Arista Air Conditioning Corporation","siteId":"ARSTA"}';
       // alert("body:: "+body);
        return this.http.post(url,body,{
            headers:new HttpHeaders().set("Timezone_Offset","-330"),
        }).map(this.extractData);
    }

   private extractData(res:HttpResponse<any>): any {
      // console.log("res:: "+JSON.stringify(res));
     //let body=res.json();
     return res;
   }
}
