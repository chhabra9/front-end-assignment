import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{user} from './user'
@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor(private http:HttpClient) { }
  getData(){
  return this.http.get<user[]>('./assets/data/record.json');

}
}
