import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {
  from:any;
  to:any;
  toVal:any;
  fromVal:any;
 currenciesToRupee=[
  {name:'rupee',val:1},
  {name:'Yen',val:0.64},
  {name:'Pound',val:100.06},
  {name:'Doller',val:81.59},
  {name:'euro',val:88.10}
]

rupeesToCurrencies=[
  {name:'rupee',val:1},
  {name:'Yen',val:0.011},
  {name:'Pound',val:0.0100},
  {name:'Doller',val:0.012},
  {name:'euro',val:0.011}
]
convert1(){
  console.log(this.from,this.to)
  if(this.from===undefined||this.to===undefined){
this.toVal='please select a currency '
  }
  else{
  console.log(this.fromVal*this.from*this.to)
  this.toVal=(this.fromVal*this.from)*this.to;}
}
convert2(){
  if(this.from===undefined||this.to===undefined){
    this.fromVal='please select a currency '
      }
  else{
  this.fromVal=(this.toVal*this.from)*this.to;}
}
}
