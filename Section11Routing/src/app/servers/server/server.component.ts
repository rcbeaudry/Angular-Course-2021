import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  id: number;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router:Router) { }


  ngOnInit() 
  {
    // subscribe to resolver to use it to get data instead of using service directly
    // just an alternative
    this.route.data
      .subscribe(
        (data: Data) => {this.server = data['server'];}
      );
/*
    // "+" is needed because params values are always strings ... we need a number,
    // so the "+" converts it to a number
    this.id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(this.id);
    this.route.params.subscribe(
      (params: Params) => 
      {
        this.server = this.serversService.getServer(+params['id']);
      }
    ) 
*/
  }

  onEdit()
  {
    // QueryParamsHandling says what to do with original query params
    // preserve passes them along, merge will add to any new ones we add here
    // since we are not adding new ones here, preserve is ok.
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
