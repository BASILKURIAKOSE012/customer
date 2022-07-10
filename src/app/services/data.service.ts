import { ApplicationRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

employees =[
  {
name:"alice",
place:"london"
  },
  {
    name:"jennifer",
    place:"paris"
  }
]

}
