import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameInterval;
  @Output() timerTick = new EventEmitter<number>();
  timerCount: number;

  constructor() 
  {     
    this.timerCount = 0;
  }

  ngOnInit(): void 
  {
  }

  onStartOutput()
  {
    this.gameInterval = setInterval(()=>{this.timerCount++; this.timerTick.emit(this.timerCount)}, 1000);
  }

  onEndOutput()
  {
    clearInterval(this.gameInterval);
    this.timerCount = 0;
  }

}
