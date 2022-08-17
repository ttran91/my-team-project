import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OrderForm } from '../model/order.model';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit, OnDestroy {
  orderFormForm: FormGroup;
  orderForm: OrderForm;
  msg: string;
  susbcriptions: Subscription[]=[];


  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.msg='';
    this.orderFormForm = new FormGroup({
      cName: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]), 
      orderStatus: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]), 
      orderCost: new FormControl('',[Validators.required]),
      cPnumber: new FormControl ('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)
                                                                          ,Validators.pattern(/^[0-9]+$/)])
      
      
  });

    }

    onFormSubmit(){
      this.orderForm = this.orderFormForm.value;
      this.susbcriptions.push(
        this.orderService.postOrderForm(this.orderForm).subscribe({
          next: (data)=>{
            this.orderForm = data;
            this.msg="Order is added in the system";
            let orderFormArry = this.orderService.orderForm$.getValue();
            orderFormArry.push(this.orderForm);
            this.orderService.orderForm$.next(orderFormArry);
            this.orderService.stat$.next(true);
          },
          error: (e)=>{
            this.msg='Operation Unsuccessfull'
          }
        })
      );

    }
      ngOnDestroy(): void {
        this.susbcriptions.forEach(sub=>sub.unsubscribe());
      
    }
  }


