import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderForm } from '../model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

   
    orderForm: OrderForm[];
     page: number;
   


  constructor(private orderService: OrderService) { }

  ngOnInit(): void{
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

    } 
  })
  
 }


}
