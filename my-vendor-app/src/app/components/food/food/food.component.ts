import { Component, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  foods: Food[];
  page: number;
  size:number;
  subscriptions: any;
  constructor(private foodService: FoodService) { }
  ngOnInit(): void {
    this.size = 5;
    this.foodService.page$.subscribe(value=>{
        this.page = value;
        this.foodService.getAllFood(this.page,this.size).subscribe({
          next: (data)=>{
              this.foods = data;
              this.foodService.food$.next(this.foods);
          },
          error: (e)=>{
            
          }
        });
    })




  }


}
