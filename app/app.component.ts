import { Component } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <h1>Restaurant Reviews</h1>
      <restaurant-list
        [restaurantList]="restaurants"
        (onRestaurantSelect)="restaurantWasSelected($event)">
      </restaurant-list>
    </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("Bollywood Theater", "Indian", "Division St", 60, 0),
      new Restaurant("Pastini", "Italian", "23rd", 70, 0),
      new Restaurant("Shandong", "Chinese", "Hollywood Ave", 60, 0),
      new Restaurant("Kachka", "Russian", "Grand Ave", 90, 0)
    ];
  }
  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    console.log('restaurant', clickedRestaurant);
  }
}
