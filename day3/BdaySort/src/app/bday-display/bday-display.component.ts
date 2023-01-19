import { Component } from '@angular/core';
import {FetchServiceService} from "../fetch-service.service"
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-bday-display',
  templateUrl: './bday-display.component.html',
  styleUrls: ['./bday-display.component.css']
})
export class BdayDisplayComponent {
  constructor(private fetch:FetchServiceService){}
  users:any;
  birthDate:any;
  name:any;
  ngOnInit(){
    this.fetch.getData()
    .subscribe((data)=>{
      console.log(data);
      this.users=data}
    );
  }
  fun(e:any){
    if(e.target.value=='birthDate'){
      this.sortByBirthDate();
    }
    else if(e.target.value=='name'){
      this.sortByName();
    }
  }
  sortByBirthDate(){
    this.users.sort((a:any,b:any)=>{
      const date1:any=new Date(a.birthDate);
      const date2:any=new Date(b.birthDate);
      return date1-date2;
    })
    this.users.forEach((element:any) => {
      console.log(element.name,element.birthDate);
    });
  }
  sortByName(){
    this.users.sort((a:any,b:any)=>{
     return a.name.localeCompare(b.name);

    })
    this.users.forEach((element:any) => {
      console.log(element.name,element.birthDate);
    });
  }
  trail(){
      
    console.log(this.birthDate,this.name);
  }
}
