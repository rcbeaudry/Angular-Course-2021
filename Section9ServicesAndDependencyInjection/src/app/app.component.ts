import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService)
  {

  }

  ngOnInit()
  {
    // As a side note, this.accountsService.accounts is an array, which is a
    // reference type, so settting equal means we are pointing to the same array
    this.accounts = this.accountsService.accounts;
  }
}
