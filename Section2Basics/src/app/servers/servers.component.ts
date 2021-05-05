import { Component, OnInit } from '@angular/core';

// Can also use inline template
// - replace templateUrl: with template:
// - must be single line of HTML if you use quote marks
// - can use "backtick" `<stuff>` to make a multi-line string
// Good if only need a small amount of HTML

// MUST have either template or templateURL
// Do not have to have selector
// Do not have to have styles

// Can also inline styles 
// - array of strings w/ CSS styling
// - also uses the backtick trick for multiline
// - only good if short

// Selector
// - can select on attribute -> selector: '[app-servers]' -> <div app-servers></div>
// - can select on class -> selector: '.app-servers' -> <div class="app-servers"></div>
// - select by ID unsupported
// - pseudo-selectors like hover unsupported

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus='No server was created!';
  numServers = 0;
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() { 
    setTimeout( () => {this.allowNewServer = true;}, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreated = true;
    this.numServers = this.numServers + 1;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server ' + this.numServers + ' was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any)
  {
    // Cast to tell IDE we know the parameter is an HTML input
    // "target.value" is a property of the input element
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
