import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsServices } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
 
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] ;
  constructor(private restaurantService: RestaurantsServices) { 
   this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  ngOnInit() {
  }

}
