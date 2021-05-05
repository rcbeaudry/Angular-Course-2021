import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSub: Subscription;

  constructor(private route: ActivatedRoute) 
  { }

  ngOnInit() 
  {
    // Initial setting of user relies on snapshot of params
    this.user = { id:this.route.snapshot.params['id'], name: this.route.snapshot.params['name']};

    // Continuous updates require subscribing to an observable
    // First function (anonymous in our case) called whenever route params change
    // If your component never reloads itself, you may not need this
    // Angular will take care of destroying this subscription, but we will be explicit
    this.paramsSub = this.route.params.subscribe(
      (params:Params) => {
        this.user.id = params['id']; 
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy()
  {
    // Don't have to, as Angular will take care of route observables, but 
    // we will need to for our own observables, so get in the habit.
    this.paramsSub.unsubscribe();
  }

}
