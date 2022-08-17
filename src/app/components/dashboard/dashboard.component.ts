import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.model';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vendor:Vendor[];
  errorMsg:string;

  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.errorMsg='';
    this.vendorService.fetchVendors().subscribe({
      next:(data)=>{
        this.vendor=data
      },
      error:(e) =>{
        this.errorMsg='Vendors not Available at this time...'
      }
    })
  }

}
