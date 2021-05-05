import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import FormsModule to get ngModel - this import is only 
// for TypeScript, not Angular
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Add FormsModule here so Angular knows what to do
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
