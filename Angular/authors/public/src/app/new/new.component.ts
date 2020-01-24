import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: {};
  error: string;

  constructor(private _http: HttpService, private router: Router) {
    this.newAuthor = { name: '' };
  }
  ngOnInit() {}
  onSubmitNewAuthor(){
    console.log(`Clicked ${JSON.stringify(this.newAuthor)}`);
    let observable = this._http.createAuthor(this.newAuthor);
    observable.subscribe((newAuthor: any) => {
      console.log('new author', newAuthor);
      //@ts-ignore
      if (newAuthor.errors) {
        //@ts-ignore
        this.error = newAuthor.errors.name.message;
        console.log("Errors: ", this.error);
      } else {
        console.log("Author is being created");
        this.newAuthor = { name: "" };
        this.router.navigate(["/home"]);
      }
    });
  }
}
