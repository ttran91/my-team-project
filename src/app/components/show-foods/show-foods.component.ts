import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-show-foods',
  templateUrl: './show-foods.component.html',
  styleUrls: ['./show-foods.component.css']
})
export class ShowFoodsComponent implements OnInit {
  food: Food[];
  errorMsg:string;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.errorMsg='';
    this.foodService.fetchFoods().subscribe({
      next:(data) => {
        this.food=data
      },
      error:(e) =>{
        this.errorMsg='Food Menu can not be presented..'
      }
    });
  }

}