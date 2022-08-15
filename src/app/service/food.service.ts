import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Food } from "../model/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    getAllFoodsApi: string;

    constructor(private http: HttpClient) {
        this.getAllFoodsApi = 'http://localhost:8181/food';
    }

    fetchFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(this.getAllFoodsApi);
    }

}