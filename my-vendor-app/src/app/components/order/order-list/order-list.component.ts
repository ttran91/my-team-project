import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderForm } from '../model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

   
    orderForm: OrderForm[];
     page: number;
     msg: string;
     subscriptions: Subscription[];
    
   


  constructor(private orderService: OrderService) { }

  ngOnInit(): void{
    this.msg='';
    this.orderService.orderForm$.subscribe(data=>{
      this.orderForm = data;
    });
  }

  prev(){
    let page = this.orderService.page$.getValue();
    if(page > 0){
      this.page = page-1;
      this.orderService.page$.next(this.page);
    }
  }

 next(){
  let page = this.orderService.page$.getValue();
  this.page = page+1;
  this.orderService.page$.next(this.page);
 }

 onorderFormDelete(oid: number) {
  this.orderService.deleteOrderForm(oid).subscribe({
    next: (data)=> {
      this.msg="Order is deleted from the system";
      this.orderForm = this.orderForm.filter(o=>o.id != oid);
      this.orderService.stat$.next(true);

    },
    error: (e)=>{
      this.msg='Order cant be deleted'
    }
  })
  
 }


}
