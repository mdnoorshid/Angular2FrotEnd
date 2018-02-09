import { Component } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results : Object
  searchTerm$ = new Subject<string>();
   
  constructor(private searchservice : SearchService){
     this.searchservice.search(this.searchTerm$)
        .subscribe(results => {
         this.results = results.results;
        });
        console.log("results:: "+JSON.stringify(this.results));
  }

}
