import { Component, Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class SearchService  {
  baseUrl : string = 'https://api.cdnjs.com/libraries';
  queryUrl : string = '?search=';

  constructor(private http:HttpClient){}
  
  search(terms : Observable<string>){
     return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term)
    );
  }

  searchEntries(term) {
      console.log('.inside searchEntries method.....');
      console.log(term)
      console.log("URL:: "+this.baseUrl + this.queryUrl + term);
     return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(this.extractData);
  }

  private extractData(res: HttpResponse<any>):any{
  console.log("res:: "+JSON.stringify(res));
  return res;
}

}
