import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html', // Specify the path to your HTML template file
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },
    
    {
      id: 1,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },

    {
      id: 2,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },

    {
      id: 3,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },

    {
      id: 4,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },

    {
      id: 5,
      salePrice: '$98,000',
      size: '3 bds | 2 ba | 1,399 sqft - For Sale',
      address: '123 Main Cir',
      city: 'Chicago',
      state: 'IL 76022',
      photo: 'assets/testhouse.jpg',
      realtor: 'Keller Williams Elite',
      status: 'For Sale'
    },
    
  ];
}









