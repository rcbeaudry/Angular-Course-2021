import { rendererTypeName } from "@angular/compiler";
import { Component } from "@angular/core";

// Decorator to tell Angular this is a component
// Selector will link in HTML - should be unique
// templateUrl needs a relative path ... relative to this file
@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html',
    styles: [".online {color:white;}"]
})
export class ServerComponent{
    // Don't need the : with type, that is a TS thing, it can be inferred, 
    // but aded here to be explicit.....
    serverID: number =10;
    serverStatus: string ='offline';

    constructor()
    {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor()
    {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() 
    {
        return this.serverStatus;
    }
}