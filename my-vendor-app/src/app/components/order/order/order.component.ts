import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OrderForm } from '../model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[]
  orderForm: OrderForm[]
  page: number;
  size: number;
  

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.subscriptions=[];
     this.size =5;
     this.subscriptions.push(
      this.orderService.page$.subscribe(value=>{
        this.page=value;
        this.orderService.getAllOrderForm(this.page,this.size).subscribe({
          next: (data)=>{
            this.orderForm =data;
            this.orderService.orderForm$.next(this.orderForm);
          },
          error: (e)=>{

          }
        })
      })
     )
    }
     ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    
  }

}


