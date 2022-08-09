import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Order } from '../model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  orderForm :FormGroup;
  order: Order;
  msg: string;
  subscriptions: Subscriptions[]=[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

}
