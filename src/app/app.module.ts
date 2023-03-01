import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
