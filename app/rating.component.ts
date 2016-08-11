import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'rate-restaurant',
  inputs: ['restaurant'],
  template: `
  <div class="restaurant-form">
    <input [(ngModel)]="restaurant.rating"/>
  </div>
  `
})
export class RateRestaurantComponent {
  public restaurant: Restaurant;
}
