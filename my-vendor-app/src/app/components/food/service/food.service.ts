import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food, foodDelete, Stat } from '../model/food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getStatsApi: string;
  getAllApi: string;
  postApi: string;
  deleteApi:string;

  food$ = new BehaviorSubject<Food[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);
  updatedStat = new BehaviorSubject<Food[]>([]);

  constructor(private http: HttpClient) {
<<<<<<< HEAD

    this.postApi='http://localhost:8173/food/';
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

  deleteFood(id: number): Observable<any> {
  
    return this.http.delete(this.deleteApi + id);

   }

  getFoodStats():Observable<Stat[]> {
    return  this.http.get<Stat[]>
    (this.getStatsApi);
 }



}