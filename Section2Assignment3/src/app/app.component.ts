import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showDetails = false;
  clicks = [];
  numClicks = 0;

  onDisplayDetails()
  {
    this.showDetails =  this.showDetails ? false : true;
    this.numClicks++;
    this.clicks.push(this.numClicks);
  }

  getColor(click)
  {
    return click >= 4 ? 'blue' : 'white';
  }
}
