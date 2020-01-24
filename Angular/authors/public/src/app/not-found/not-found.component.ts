import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
    // notFound() {
    //   this._router.navigate(['/page-not-found']);
    // }
  }

}
