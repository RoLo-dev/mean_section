import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  constructor(private _http: HttpService) { 
    // this.getAuthors();
  }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    let observable = this._http.getAuthors();
    observable.subscribe((data) => {
      console.log('received data', data);
      this.authors = data['authors'];
    });
  }
  deleteAuthor(id: string){
    console.log(`Clicked ${id}`);
    let observable = this._http.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('author will be deleted', data);
    });
    this.getAuthors();
  }

}
