import { Component, OnInit } from '@angular/core';
import { Stat } from '../model/food.model';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-stat',
  templateUrl: './food-stat.component.html',
  styleUrls: ['./food-stat.component.css']
})
export class FoodStatComponent implements OnInit {

  stat: Stat[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.stat$.subscribe(data=>{
      this.foodService.getFoodStats().subscribe(data=>{
        this.stat = data;
      });
  });

  }

}
