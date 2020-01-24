import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  selectedAuthor = {};
  error: string;

  constructor(
    private _http: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAuthor();
  }
  getAuthor(){
    console.log(this.id);
    let observable = this._http.getAuthor(this.id);
    observable.subscribe((data: object) => {
      console.log('received data', data);
      this.selectedAuthor = data;
    });
  }
  onSubmitEditAuthor(){
    console.log(`clicked ${JSON.stringify(this.selectedAuthor)}`);
    let observable = this._http.updateAuthor(this.id, this.selectedAuthor);
    observable.subscribe(updateauthor => {
      console.log('received data', updateauthor);
      //@ts-ignore
      if (updateauthor.errors) {
        //@ts-ignore
        this.error = updateauthor.errors.name.message;
        console.log("Errors: ", this.error);
      } else {
        console.log("Author is being updated");
        this.selectedAuthor = { name: "" };
        this.router.navigate(["/home"]);
      }
    });
  }

}
