import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-cake-review',
  templateUrl: './cake-review.component.html',
  styleUrls: ['./cake-review.component.css']
})
export class CakeReviewComponent implements OnInit {
  @Input() cake: {};
  newReview: {};
  errors: {};

  constructor(private _http: HttpService) { 
    this.newReview = { rating: '', comment: '' };
  }

  ngOnInit() {}
  onSubmitNewReview(id: string){
    console.log(`Clicked: ${JSON.stringify(this.newReview)}`);
    let observable = this._http.createReview(this.newReview, id);
    observable.subscribe(newReview => {
      console.log('received new review', newReview);
      // if(newReview.hasOwnProperty('errors')){
      //   console.log('new review errors: ', newReview.errors);
      //   this.errors = newReview.errors;
      //   console.log('errors: ', this.errors);
      // }
    });
    this.errors = null;
    this.newReview = { rating: '', comment: '' };
  }

}
