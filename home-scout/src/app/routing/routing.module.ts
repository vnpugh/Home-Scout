import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';




// https://angular.io/guide/router#displaying-a-404-page
// Documentation for using router
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  
  {path: 'watchlist', component: WatchlistComponent},

 { path: '**', redirectTo: 'home'},


];

// the router should reload the component when navigating to the same URL
@NgModule({ 
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class RoutingModule {}