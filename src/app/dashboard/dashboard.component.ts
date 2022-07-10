import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText:string="";
gridValue=""
listValue=""
filterText:string=""
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  employees =[
    {
  firstName:"robyn",
  secondName:"Flores",
  address:"345 cedar",
  city:"Dallas",
  state:"Texas"
    },
    {
      firstName:"mitchelle",
      secondName:"Avery",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"ward",
      secondName:"Bell",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"robin",
      secondName:"Cleark",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"pinal",
  secondName:"Dave",
  address:"345 cedar",
  city:"Dallas",
  state:"Texas"
    },
    {
      firstName:"albert",
      secondName:"Einstein",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    }
  
  ]
  showCard(){
this.gridValue="hello"


  }
  showList(){
this.listValue="hello"
  }

// new
// filter.pipe.ts





}
