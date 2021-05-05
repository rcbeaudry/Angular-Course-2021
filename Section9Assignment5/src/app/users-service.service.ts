import { Injectable } from '@angular/core';
import { CounterService } from './counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CounterService)
  { }

  SetToInactive(id: number) 
  {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.logMadeInactive();
  }

  SetToActive(id: number) 
  {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.logMadeActive();
  }

}
