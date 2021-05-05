import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit()
  {
    // Static way if you are not going to reload from this component
    this.errorMessage = this.route.snapshot.data['message'];

    // Dynamic way if you are going to reload from this component
    this.route.data.subscribe(
      (data: Data) =>
      {
        this.errorMessage = data['message'];
      }
    )
  }

}
