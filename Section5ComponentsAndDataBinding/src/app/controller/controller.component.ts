import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  // Setup custom events so we can bind to them outside this component
  // Define object that will be passed out as TS object w/ two strings
  // Could assign an alias, like with Input ... put alias in parens
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  // These two properties are two-way bound in this component's HTML
  // Data passed from input boxes to these strings
  newServerName = '';
  newServerContent = '';

  // @ViewChild is a way to directly look at the DOM values
  // Must be imported from @angular/core above
  // @ViewChild('localreferencename', {static:true}) serverContentInput: ElementRef;
  // serverContentInput is an ElementRef (Angular Type, must be imported from @angular/core above)
  
  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer and onAddBlueprint are fired when appropriate butons are clicked
  // because we bound to the click event on the buttons.
  // Call our emitters so that components outside of us know the data was added

  // If we were using local references, we'd need input parameters
  // nameInput: HTMLInputElement -> because reference is on an input element
  // And refer to them -> nameInput.value;  -> use value here because it is the text for the Input element

  // If we were using ViewChild, NO parameter needed, and reference would be
  // this.serverContentInput.nativeElement.value --> value because native element for this example is an input

  onAddServer() 
  {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
  onAddBlueprint() 
  {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
