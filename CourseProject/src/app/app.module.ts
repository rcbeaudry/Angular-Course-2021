import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  // All components, directives, and pipes we need
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // Other modules that we need (saves us adding all the bits to declarations above)
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  // Services that need injecting, if you don't use {providedIn:'root'}
  // Can also break out service to separate "CoreModule", and import it back in
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  // Which component is in the index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
