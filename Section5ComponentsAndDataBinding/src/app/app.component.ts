import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'blueprint', name: 'TestServer', content: 'Just a Test!'}];

  // onServerAdded called when we get custom event called serverCreated
  // see the HTML code of this component for the event binding
  onServerAdded(serverData: {serverName: string, serverContent: string}) 
  {
      this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
  }
    
  // onBlueprintAdded called when we get custom event called blueprintCreated
  // see the HTML code of this component for the event binding  
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) 
  {
      this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        }); 
  }

}
