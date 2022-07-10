import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees =[
    {
  firstName:"Robyn",
  secondName:"Flores",
  address:"345 cedar",
  city:"Dallas",
  state:"Texas"
    },
    {
      firstName:"Mitchelle",
      secondName:"Avery",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"Ward",
      secondName:"Bell",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"Robin",
      secondName:"Cleark",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    },
    {
      firstName:"Pinal",
  secondName:"Dave",
  address:"345 cedar",
  city:"Dallas",
  state:"Texas"
    },
    {
      firstName:"Albert",
      secondName:"Einstein",
      address:"345 cedar",
      city:"Dallas",
      state:"Texas"
    }
  
  ]
  @Input () show :string|undefined
  constructor() { }

  ngOnInit(): void {
  }

}
