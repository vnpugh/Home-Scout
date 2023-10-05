// home.component.ts
import { Component } from '@angular/core';

import { HousingLocation } from '../housing-location';



@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <div class="row">
  <div class="col-md-4" *ngFor="let housingLocation of housingLocationList">
    <div class="card-container">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </div>
  </div>
</div>

<!-- styles should be applied to HousingLocationComponent.css -->

    </section>
  `,
})
export class HomeComponent {



  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - House for Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite'
    },
  
  

    // {
    //   id: 1,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: 'assets/testhouse.jpg',
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true
    // },

    // {
    //   id: 2,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: 'assets/testhouse.jpg',
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true
    // },

    // {
    //   id: 3,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: 'assets/testhouse.jpg',
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true
    // },




    // {
    //   id: 1,
    //   name: 'A113 Transitional Housing',
    //   city: 'Santa Monica',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    //   availableUnits: 0,
    //   wifi: false,
    //   laundry: true
    // },
    // {
    //   id: 2,
    //   name: 'Warm Beds Housing Support',
    //   city: 'Juneau',
    //   state: 'AK',
    //   photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: false,
    //   laundry: false
    // },
    // {
    //   id: 3,
    //   name: 'Homesteady Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false
    // },
    // {
    //   id: 4,
    //   name: 'Happy Homes Group',
    //   city: 'Gary',
    //   state: 'IN',
    //   photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false
    // },
    // {
    //   id: 5,
    //   name: 'Hopeful Apartment Group',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 6,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    //   availableUnits: 5,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 7,
    //   name: 'Hopeful Housing Solutions',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true
    // },
    // {
    //   id: 8,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    //   availableUnits: 10,
    //   wifi: false,
    //   laundry: false
    // },
    // {
    //   id: 9,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true
    // }
]; 
} 








