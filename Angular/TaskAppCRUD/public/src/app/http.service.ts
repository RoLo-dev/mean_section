import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get('/tasks');
  }
  getTask(task_id: string){
    return this._http.get('/tasks/' + task_id);
  }
  createTask(task: any){
    return this._http.post('/tasks', task);
  }
  updateTask(task_id: string, taskToUpdate: any){
    console.log('task to update: ', taskToUpdate);
    return this._http.put('/tasks/' + task_id, taskToUpdate);
  }
  deleteTask(taskToDelete_id: string){
    return this._http.delete('/tasks/' + taskToDelete_id);
  }
};
