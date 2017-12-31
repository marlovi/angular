import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>
  constructor( private service: RestaurantsServices, 
               private route:ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.service.menuOfrestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(menuItem: MenuItem):void{
    console.log(menuItem);
  }

}
