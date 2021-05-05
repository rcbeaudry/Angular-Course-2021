import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Since there is a local reference to the form, we can view it with @ViewChild
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion='teacher';
  answer='';
  eyes = ['brown', 'blue'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    eyecolor: ''
  };
  submitted = false;

  suggestUserName() 
  {
    const suggestedName = 'Superuser';

    // Not the best approach, as it would overwrite existing values, but it is a way to 
    // set the entire form at once, if that was what we needed.
/*     this.signupForm.setValue(
      {
        // Grouped together and named because of our ngModelGroup
        userData:
        {
          username: suggestedName,
          email :''
        },
        secret:'pet',
        questionAnswer: '',
        eyecolor: 'blue'
      }
    ) */

    // Better way, only overwrites values specified, leaves others alone
    this.signupForm.form.patchValue({userData: { username: suggestedName }})
  }

  onSubmit(form: NgForm)
  {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.eyecolor = this.signupForm.value.eyecolor;

    // This will reset the form / data / state / properties, etc.
    // Could pass in an object like setValue() above, to reset form data 
    // to specific values instead of empty.
    this.signupForm.reset();

  }

  // Example of using @ViewChild to see form
  onSubmitWithViewChild()
  {
    console.log(this.signupForm);
  }
}
