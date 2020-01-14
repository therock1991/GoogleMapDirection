import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';

import { RouteDetailsComponent } from './route-details/route-details.component';
import { AutocompleteComponent } from './shared/google-map/autocomplete/autocomplete.component';
@NgModule({
  declarations: [AppComponent, RouteDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHCkWFfZeifw5NR9eX32nc7SAoUhHpXKw',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
