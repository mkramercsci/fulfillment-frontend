import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { BatchesCompleteComponent } from './batches-complete/batches-complete.component';
import { BatchesContainerComponent } from './batches-container/batches-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    BatchesCompleteComponent,
    BatchesContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
