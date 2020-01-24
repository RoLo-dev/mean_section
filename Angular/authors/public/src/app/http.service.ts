import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/authors');
  }
  deleteAuthor(id: string){
    return this._http.delete('/authors/' + id);
  }
  createAuthor(newAuthor: any){
    return this._http.post('/authors', newAuthor);
  }
  getAuthor(id: string){
    return this._http.get('/authors/' + id);
  }
  updateAuthor(id: string, authorToUpdate: any){
    return this._http.put('/authors/' + id, authorToUpdate);
  }
}
