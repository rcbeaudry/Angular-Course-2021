import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsers = ['Rich', 'Danielle'];

  ngOnInit()
  {
    // Init the form here, since this is called pre-render
    //
    // Controls are key/value pairs
    // Wrap names in single quotes to preserve during minification, as we will reference in HTML
    //  - May not be strictly needed, but just in case
    // For now, default values null on inputs and 'male' for gender
    //
    // Validation added here, not as directives in the form
    //
    // Can pass single validator, or array of validators
    //  - Don't put parens after them, we don't want to execute "now", just need to pass reference 
    //    so Angular can call when it needs to
    //
    // Can also nest FormGroups
    //
    // FormArray used for arrays of controls - can init to empty
    //
    // The forbiddenNames validator must bind to this, since Angular will call it when needed, and it 
    //  may not be clear what "this" is in the validator.  So, bind it to this object
    //
    // The forbiddenEmail is an asynchronous validator, so 3rd param.  Also, our particular one
    //  does not use "this", so no need to bind here.  But if it did use "this", we'd need to bind.
    //
    // Can also use setValue() and patchValue() and reset() as with Template forms
    //
    // Can subscribe to value and status changes
    //  this.signupForm.valueChanges.subscribe((value)=>console.log(value));
    //  this.signupForm.statusChanges.subscribe((status)=>console.log(status));
    //
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), 
      'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmail),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

  }

  onSubmit()
  {
    // Have access here, no need to use @ViewChild, or pass local reference
    console.log(this.signupForm);
  }
  onAddHobby()
  {
    // Add a control to our array
    // Must cast the get('hobbies') as FormArray
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Need to add this getter, as Angular syntax changed from the lecture time
  // Used to loop over our control array for hobbies
  get controls()
  {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  // If validation passes, return null, or omit return statement
  forbiddenNames(control: FormControl): {[s: string]:boolean}
  {
    if (this.forbiddenUsers.indexOf(control.value) !== -1)
    {
      return {'nameForbidden': true};
    }
    else
    {
      return null;
    }
  }

  // Async validator .... whacked syntax ... 
  // Basically will delay for 1.5 seconds, to simulate checking back office, 
  // and then will tell if email is valid or not
  // Again, if valid, return null
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> 
  { const promise = new Promise<any>((resolve, reject) =>
    {
      setTimeout(()=>
      {
        if (control.value === 'test@test.com')
        {
          resolve({'emailForbidden': true});
        }
        else
        {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
