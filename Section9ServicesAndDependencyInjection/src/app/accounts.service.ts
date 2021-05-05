import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// When injecting a service into a service, it is 
// the *receiving* service that gets the Injectable()
@Injectable()
export class AccountsService
{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>();

    // Inject service into service, since logging service is at app.module level
    constructor(private logService: LoggingService)
    {

    }
    addAccount(name : string, status: string)
    {
        this.accounts.push({name: name, status: status});
        this.logService.logStatusChange(status);
    }

    updateStatus(id: number, status: string)
    {
        this.accounts[id].status = status;
        this.logService.logStatusChange(status);        
    }
}