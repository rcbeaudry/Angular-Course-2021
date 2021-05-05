import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './WarningAlert/warningalert.component';
import { SuccessComponent } from './SuccessAlert/successalert.component';
import { AlertareaComponent } from './alertarea/alertarea.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    AlertareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
