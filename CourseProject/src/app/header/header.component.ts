import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuth = false;

  constructor(private dataServ: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      // cool logic trick ... is user = null, !!user = false.  If user != null, !!user = true
      this.isAuth = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  
  onSaveData() {
    this.dataServ.storeRecipes();
  }

  onFetchData() {
    this.dataServ.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
