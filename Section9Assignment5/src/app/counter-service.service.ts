import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor() { }

  logMadeActive()
  {
    this.inactiveToActive++;
    console.log("Inactive to Active Count: "+this.inactiveToActive);
  }

  logMadeInactive()
  {
    this.activeToInactive++
    console.log("Active to Inactive Count: "+this.activeToInactive);
  }
}
