import { Component, EventEmitter } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RateRestaurantComponent } from './rating.component';

@Component({
    selector: 'restaurant-list',
    inputs: ['restaurantList'],
    outputs: ['onRestaurantSelect'],
    directives: [RestaurantComponent, RateRestaurantComponent],
    templateUrl: 'app/restaurant-list.component.html'
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    console.log('child', clickedRestaurant);
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
  createRestaurant(name: string, specialty: string, address: string, priceLevel: number, rating: number): void {
    this.restaurantList.push(
      new Restaurant(name, specialty, address, priceLevel, rating)
    );
  }
}
