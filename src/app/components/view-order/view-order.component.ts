import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders: Order[];
  subscriptions: Subscription[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      }
    })
    );
  }

  onOrderget(oid:number){
    this.orderService.getSingleOrder(oid).subscribe({
      next:(data)=>{
        this.orders=this.orders.filter(o=>o.idOrder !=oid);
      },
      error: (e)=>{}
    });
  }
  

}
