import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-list-rxjs',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponentRxjs implements OnInit {

  food: Food[];
  page:number;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.food$.subscribe(data=>{
      this.food = data;
  });
  }

  prev(){
    

     let page = this.foodService.page$.getValue();
    //update the value of page
    if(page >0){
     this.page = page-1;
     //attach the updated value to the subject
      this.foodService.page$.next(this.page);
    }

}

next(){
   //read the value of page from subject
   let page = this.foodService.page$.getValue();
   //update the value of page
   this.page = page + 1;
   //attach the updated value to the subject
   this.foodService.page$.next(this.page);
}
  

}
