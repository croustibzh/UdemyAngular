import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
