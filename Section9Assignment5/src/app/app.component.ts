import { Component } from '@angular/core';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]             // At this level, as we need it in the app and child components, 
                                        // but not injecting to another service
})
export class AppComponent {



}
