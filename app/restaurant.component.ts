import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <div class="container">
      <h3>{{ restaurant.name }}</h3>
      <p>Specialty: {{ restaurant.specialty }}</p>
      <p>Address: {{ restaurant.address }}</p>
      <p>Price Level: {{ restaurant.priceLevel }}</p>
      <p>Rating: {{ restaurant.rating }}</p>
    </div>
  `
})
export class RestaurantComponent {
  public restaurant: Restaurant;
}
