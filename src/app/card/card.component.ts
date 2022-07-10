import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
 
@Input () item :string|undefined

  constructor() { 
    console.log(this.item);
    
  }

  ngOnInit(): void {
  }
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
  
 
  
}
