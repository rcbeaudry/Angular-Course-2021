import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number)
  {
    // do some work here, and now navigate away....
    // use ID passed in as part of route
    // and add query params and fragment
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1', anotherParam:'help'}, fragment: 'loading2'});
  }

  // Call fake auth service to log us in
  onLogin()
  {
    this.authService.login();
  }

  // call fake auth service to log us out
  onLogout()
  {
    this.authService.logout();
  }
}
