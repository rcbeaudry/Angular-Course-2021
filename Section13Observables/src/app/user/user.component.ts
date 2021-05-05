import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() 
  {
    // For Observables provided by Angular, it manages unsubs.
    // You can explicitly save it and unsub in OnDestroy, but you don't have to.
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
