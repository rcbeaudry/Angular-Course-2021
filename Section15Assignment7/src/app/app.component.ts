import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projForm: FormGroup;
  forbiddenProj = ['test'];

  ngOnInit()
  {
    this.projForm = new FormGroup({
      'projname': new FormControl(null, Validators.required, this.forbiddenProjectsAsync.bind(this)), 
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl(null)
    });
  }

  onSubmit()
  {
    // Have access here, no need to use @ViewChild, or pass local reference
    console.log(this.projForm);
  }

  forbiddenProjects(control: FormControl): {[s: string]:boolean}
  {
    if (this.forbiddenProj.indexOf(control.value) !== -1)
    {
      return {'projectForbidden': true};
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
  forbiddenProjectsAsync(control: FormControl): Promise<any> | Observable<any> 
  { const promise = new Promise<any>((resolve, reject) =>
    {
      setTimeout(()=>
      {
        if (this.forbiddenProj.indexOf(control.value) !== -1)
        {
          resolve({'projectForbidden': true});
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
