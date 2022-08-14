import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food, Stat } from '../model/food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getStatsApi: string;
  getAllApi: string;
  postApi: string;

  food$ = new BehaviorSubject<Food[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);

  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8173/food/2';
    this.getAllApi='http://localhost:8173/food';
    this.getStatsApi='http://localhost:8173/food/stats';
   }

   public postFood(food: Food):Observable<Food>{
      return this.http.post<Food>
          (this.postApi, food);
      }

  getAllFood(page: number,size: number) : Observable<Food[]>{
  return  this.http.get<Food[]>(this.getAllApi + '?page='+page+'&size='+size);
  }

  getFoodStats():Observable<Stat[]> {
    return  this.http.get<Stat[]>
    (this.getStatsApi);
 }



}