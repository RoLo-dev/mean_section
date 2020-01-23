import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes = [];
  newCake: {};
  currentCake: any;
  currentCakeAvg: any;
  errors: {};

  constructor(private _http: HttpService) {}
  ngOnInit(){
    this.getCakes();
    this.newCake = { name: '', image: '' };
  }
  getCakes(){
    let observable = this._http.getCakes();
    observable.subscribe((data: object) => {
      console.log('received data', data);
      this.cakes = data['cakes'];
    });
  }
  getCake(id: string){
    console.log(`clicked ${id}`);
    let observable = this._http.getCake(id);
    observable.subscribe(data => {
      console.log('received data', data);
      this.currentCake = data;
      if(this.currentCake.reviews.length == 0){
        this.currentCakeAvg = null;
      } else{
        let sum = 0;
        for(let i = 0; i < this.currentCake.reviews.length; i++){
          sum += this.currentCake.reviews[i].rating;
        }
        this.currentCakeAvg = sum / this.currentCake.reviews.length;
      }
    });
  }
  createCake(){
    console.log(`clicked: ${JSON.stringify(this.newCake)}`);
    let observable = this._http.createCake(this.newCake);
    observable.subscribe(newCake => {
      console.log('received new cake', newCake);
      // if(newCake.hasOwnProperty("errors")){
      //   this.errors = newCake.errors;
      //   console.log('Errors: ', this.errors);
      // }
    });
    this.errors = null;
    this.newCake = { name: '', image: '' };
    this.getCakes();
  }
}
