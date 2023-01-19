import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{user} from './user'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
