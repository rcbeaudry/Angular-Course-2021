import { Component, Input} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]                   // Tells Angular that it needs to give us this type
  // Don't have AccountsService here in providers, because we want service instance at app.module level
  // We also removed LoggingService to show it at app.module level, but kept here commented out so 
  // we could see a local example
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Inform Angular that we need an instance of this logging service
  // Also uses shortcut to initialize property to this value
  // Don't really need the LoggingService, but kept here in case we want to undo the app.module level 
  constructor(private logService: LoggingService, private accountsService: AccountsService)
  {

  }

  onSetTo(status: string) 
  {
    this.accountsService.updateStatus(this.id, status);
    
    //this.logService.logStatusChange(status);

    // Can emit an event setup in the service  - cross-component communications via events on services
    this.accountsService.statusUpdated.emit(status);
  }
}
