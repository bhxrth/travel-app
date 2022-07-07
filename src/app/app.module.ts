import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelregistrationComponent } from './travelregistration/travelregistration.component';
import { ViewdestinationsComponent } from './viewdestinations/viewdestinations.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelregistrationComponent,
    ViewdestinationsComponent,
    SearchplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
