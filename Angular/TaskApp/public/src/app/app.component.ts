import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  taskToShowDetails = {}

  constructor(private _http: HttpService) {}
  // ngOnInit() {}

  getTasksOnClick(){
    this._http.getTasks().subscribe((tasks: any) =>{
      console.log('tasks objects: ', tasks)
      this.tasks = tasks['tasks'];
    })
  }
  showTaskDetails(task){
    console.log('the task found is ', task);
    this.taskToShowDetails = task;
  }
}
