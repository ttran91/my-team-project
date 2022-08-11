import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Food } from '../model/customer.food';

@Injectable({
    providedIn: 'root'
})



export class FoodService{
     
    getallFoodApi: string;

     constructor(private http: HttpClient) {
        this.getallFoodApi = "http://localhost:8181/food";

     }
     fetchFoods(): Observable<Food[]>{
        return this.http.get<Food[]>(this.getallFoodApi);
     }
}