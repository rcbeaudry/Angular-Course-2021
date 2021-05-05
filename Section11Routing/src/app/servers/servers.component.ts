import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  // Inject "ActivatedRoute" to get current route to this component
  constructor(private serversService: ServersService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload()
  {
    // Comment out for now, but keep other code , will be back later
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
