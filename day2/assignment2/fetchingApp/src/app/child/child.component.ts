import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(private fetch:FetchService){}
  users:any;
  ngOnInit(){
    this.fetch.getData()
      .subscribe(data=>this.users=data)
  };
}
