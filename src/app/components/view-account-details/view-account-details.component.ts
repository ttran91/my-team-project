import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-view-account-details',
  templateUrl: './view-account-details.component.html',
  styleUrls: ['./view-account-details.component.css']
})
export class ViewAccountDetailsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  errorMsg: string;
  customers: Customer[];
  CustId:number;

  constructor(private customerService: CustomerService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ng on init');
    this.subscriptions.push(
      this.customerService.getAllCustomers().subscribe({
        next: (data)=> {
          this.customers = data;
        }
      })
    );

  }

    onGetSingleCustomer(cid: number){
      this.customerService.getSingleCustomer(this.CustId).subscribe({
        next:(data)=>{
          this.customers=this.customers.filter(c=>c.customerid !=this.CustId);
        }
      });
    }
  }






