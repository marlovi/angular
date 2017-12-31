import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { Injectable } from "@angular/core";

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from "@angular/http";
import { ErrorHandler } from "app/app.error-handler";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsServices{
    constructor(private http:Http){}

    restaurants(): Observable<Restaurant[]>{
      return  this.http.get(`${MEAT_API}/restaurants`)
                       .map(response => response.json())
                       .catch(ErrorHandler.handlerError);
    }

    restaurantById(id: string) : Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

    reviewsOfRestaurant(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

    menuOfrestaurant(id: string) : Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
}