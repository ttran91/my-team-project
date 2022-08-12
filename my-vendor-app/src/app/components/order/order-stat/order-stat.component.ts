import { Component, OnInit } from '@angular/core';
import { Stat } from '../model/Stat.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-stat',
  templateUrl: './order-stat.component.html',
  styleUrls: ['./order-stat.component.css']
})
export class OrderStatComponent implements OnInit {

  stat: Stat[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.stat$.subscribe(data=>{
    this.orderService.getOrderFormStats().subscribe(data=>{
      this.stat = data;
    });
  });
}

}
