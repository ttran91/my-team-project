import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderFormEditDto } from '../model/OrderFormEdit';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
msg: string;
orderFormEditDto: OrderFormEditDto;
orderFormEdits: FormGroup;
cName: string;
orderStatus: string;
orderCost: string;
cPnumber: number;
subscriptions: Subscription[];




  constructor(private orderService: OrderService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.msg='';
    this.orderService.getOrderFormById(this.router.snapshot.params['id'])
    .subscribe ((data)=> {
      console.log(data);
      this.orderFormEdits = new FormGroup({
        cName: new FormControl(data['cName']),
        orderStatus: new FormControl(data['orderStatus']),
        orderCost: new FormControl(data['orderCost']),
        cPnumber: new FormControl(data['cPnumber'])
      });

      
    })

  }






  onorderFormEdit() {
  this.orderService.updateOrderFromById(this.router.snapshot.params['id']
  ,this.orderFormEdits.value)
  .subscribe ((data)=> {
    console.log(data,"data updated successfully")
    this.msg='Data updated successfully'
  })
}


}
