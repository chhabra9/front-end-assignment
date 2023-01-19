import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FetchService} from './fetch.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 change:boolean=false;
 toogle(){
  this.change=!this.change;
 }
}
