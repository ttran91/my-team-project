import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from '../model/food.model';
import { FoodService } from '../service/food.service';


@Component({
  selector: 'app-food-add-rxjs',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponentRxjs implements OnInit {

  foodForm :FormGroup;

  food: Food;
  msg:string;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.msg='';
    this.foodForm = new FormGroup({
      name: new FormControl('', [Validators.required,
                                 Validators.pattern(/^[a-zA-Z ]+$/)]),
      foodCategory: new FormControl('', [Validators.required,
                                 Validators.pattern(/^[a-zA-Z ]+$/)]),
      foodPrice: new FormControl('', [Validators.required,
                                  Validators.minLength(1),
                                  Validators.maxLength(10),
                                  Validators.pattern(/^(0(?!\.00)|[1-9]\d{0,6})\.\d{2}$/)]),
    });
  }

  onFormSubmit(){
    this.food = this.foodForm.value;
     this.foodService.postFood(this.food).subscribe( {
        next: (data)=> {
          this.food = data;
          this.msg='Food added successfully!';
          //Read the value from the Subject
          let foodArray = this.foodService.food$.getValue();
          //update the value: add food to food[]
          foodArray.push(this.food);
          //update the subject value
          this.foodService.food$.next(foodArray);

          this.foodService.stat$.next(true);
        },
        error: (e)=>{
          this.msg='Operation Failed';
        }
     });
  }

}

