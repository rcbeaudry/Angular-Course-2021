import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSub='advanced';
  submitted = false;
  user = {
    email: '',
    password: '',
    sub: ''
  };

  onSubmit(f: NgForm)
  {
    this.submitted = true;

    this.user.email = f.value.email;
    this.user.password = f.value.password;
    this.user.sub = f.value.sub;

    f.reset();
  }
}
