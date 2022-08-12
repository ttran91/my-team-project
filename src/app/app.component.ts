import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { Food } from './model/food.model';
import { FoodService } from './service/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-app';
  constructor(private foodService: FoodService, private authService: AuthService) {}
  foods: Food[];
  username: string;

  ngOnInit(): void {
 //   this.foods = this.foodService.fetchFood();
    this.authService.username$.subscribe(data=>{
      this.username = data;
     //this.username = localStorage.getItem('username');
     console.log(this.username);
   })

  }
}
