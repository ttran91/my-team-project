import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderFormEditDto } from '../model/OrderFormEdit';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  info: string;
  orderFormEditDto: OrderFormEditDto;
  orderEditForm: FormGroup;
  msg: string;


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.msg='';
    this.orderEditForm = new FormGroup({
      cName: new FormControl(''),
      orderStatus: new FormControl(''),
      orderCost: new FormControl(''),
      cPnumber: new FormControl('')
    });
}

  onFormSubmit(){
    this.orderFormEditDto={
      cName: this.orderEditForm.value.cName,
      orderStatus: this.orderEditForm.value.orderStatus,
      orderCost: this.orderEditForm.value.orderCost,
      cPnumber: this.orderEditForm.value.cPnumber


    };
    this.orderService.editForm(this.info).subscribe({
      next: (data)=> {
        this.msg="Order Updated!!!";
        this.orderEditForm.controls['cName'].setValue(this.orderFormEditDto.cName);
        this.orderEditForm.controls['orderStatus'].setValue(this.orderFormEditDto.orderStatus);
        this.orderEditForm.controls['orderCost'].setValue(this.orderFormEditDto.orderCost);
        this.orderEditForm.controls['cPnumber'].setValue(this.orderFormEditDto.cPnumber);
        


      },
      error: (e)=> {
        this.msg="OrderEdit Operation Failed";
      }
    });
  }

}
