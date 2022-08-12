import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Food } from '../model/food.model';


@Injectable({
    providedIn: 'root'
})



export class FoodService{
     
    getallFoodApi: string;

     constructor(private http: HttpClient) {
        this.getallFoodApi = "http://localhost:4401/food";

     }
     fetchFoods(): Observable<Food[]>{
        return this.http.get<Food[]>(this.getallFoodApi);
     }
}