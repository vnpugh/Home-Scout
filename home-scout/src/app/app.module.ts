// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    WatchlistComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule.forRoot([ { path: '', component: HomeComponent}]),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

