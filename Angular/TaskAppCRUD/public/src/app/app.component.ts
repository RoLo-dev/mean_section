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
  oneTask = {};
  taskToShowDetails = {};
  newTask: any;
  updateTask: any;
  currentTask = {};
  stringID: string = '';

  constructor(private _http: HttpService) {}
  ngOnInit() {
    this.newTask = { title: '', description: '' };
    this._http.getTasks().subscribe((data: any) =>{});
    this._http.getTasks().subscribe((tasks: any) =>{
    this.tasks = tasks['tasks'];
    })
  }
  getTasks(){
    let observable = this._http.getTasks();
    observable.subscribe((data: object) =>{
      console.log('Getting data', data);
      this.tasks = data['tasks'];
      // this.oneTask = data['tasks'][2];
    })
  }
  getTask(id: string){
    console.log(`showing task id ${id}`);
    let observable = this._http.getTask(id);
    observable.subscribe(data => {
      console.log('This is the task', data);
      this.currentTask = data;
    });
  }
  createTask(){
    let observable = this._http.createTask(this.newTask);
    observable.subscribe(newTask => {
      console.log('new task', newTask);
    })
    this.newTask = { title: '', description: '' };
    this.getTasks();
  }
  getTaskToUpdate(id: string){
    console.log(`edit this task id ${id}`)
    let observable = this._http.getTask(id);
    observable.subscribe(data => {
      console.log(data)
      this.updateTask = data;
    });
  }
  updatingTask(){
    console.log(
      `Event is working: ${JSON.stringify(this.updateTask)}`
    );
    let observable = this._http.updateTask(
      this.updateTask._id,
      this.updateTask
    );
    observable.subscribe(updateTask => {
      console.log('task to update', updateTask);
    });
    this.updateTask = null;
    this.getTasks();
  }
  deleteTask(id: string){
    console.log(`Checking for id: ${id}`);
    let observable = this._http.deleteTask(id);
    observable.subscribe(data => {
      console.log('task to delete', data);
    this.getTasks();
    });
  }

  // getTasksOnClick(){
  //   this._http.getTasks().subscribe((tasks: any) =>{
  //     console.log('tasks objects: ', tasks)
  //     this.tasks = tasks['tasks'];
  //   })
  // }
  // showTaskDetails(task){
  //   console.log('the task found is ', task);
  //   this.taskToShowDetails = task;
  // }
}
