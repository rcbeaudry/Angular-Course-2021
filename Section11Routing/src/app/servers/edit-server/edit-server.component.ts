import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  id: number;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() 
  {
    // First time through
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
    // Can subscribe for updates - Angular will handle destroy, but may want to be explicit
    this.route.queryParams.subscribe(
      (queryParams: Params) => {this.allowEdit = queryParams['allowEdit'] === '1'? true:false;}
    );
    // Empty subscription, here for example if we wanted to subscribe
    this.route.fragment.subscribe();

    // Get the id passed to us in URL, call server service to get the data, and update our local properties
    this.id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(this.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() 
  {
    // When button pressed, update our server data, set flag to indicate we saved, and navigate away
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // Thsi will check to see if we can leave the page.
  // If we return true, we can navigate away, if we return false, we will stay on same page
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean 
  {
    // If we couldn't edit, no changes to track, so ok to leave
    if (!this.allowEdit)
    {
      return true;
    }

    // serverName and serverStatus are 2-way bound, so they will update when the input fields change
    // Compare them to the existing values
    // If they did not change, or if they did change and were saved, ok to leave
    // If they changed and were not saved, ask user if ok to leave
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
          && !this.changesSaved)
    {
        return confirm('Do you want to save???');
    }
    else
    {
      return true;
    }
  }
}
