import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

// Ideally have in a model, but for quick example, leave here
interface ServerData{id: number, name: string, status: string};

@Injectable()
export class ServerResolver implements Resolve<ServerData>
{
    id: number;
    constructor(private serversService: ServersService)
    {

    }

    // method satisfies the resolve interface
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerData> | Promise<ServerData> | ServerData
    {
        // Get the id from route params - use the "+" trick to make a number
        // Call servers service with id to get server data
        // this returned data will be stuffed into the object specified in the routing table
        this.id = +route.params['id'];
        return this.serversService.getServer(this.id); 
    }
}