import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Inventory } from '../model/inventory.model';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.css']
})
export class InventoryAddComponent implements OnInit, OnDestroy {


  inventoryForm: FormGroup;
  inventory: Inventory;
  msg: string;
  fid: any;
  vid: any;
  data: any;
  subscriptions: Subscription[]=[];


  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.msg='';
    this.inventoryForm = new FormGroup({
      fid: new FormControl(''),
      vid: new FormControl(''),
      amountInStock: new FormControl(''),
      maxStock: new FormControl(''),
      dateAdded:new FormControl (''),
      outOfStockExp:new FormControl(''),

    });

  }


  onFormSubmit(){
    this.inventory = this.inventoryForm.value;
    this.subscriptions.push(
      this.inventoryService.postInventoryForm(this.inventory).subscribe({
        next: (data)=>{
          this.inventory = data;
          this.msg="Order is added in the system";
          let inventoryArry = this.inventoryService.inventory$.getValue();
          inventoryArry.push(this.inventory);
          this.inventoryService.inventory$.next(inventoryArry);
        },
        error: (e)=>{
          this.msg='Operation Unsuccessfull'
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=>sub.unsubscribe());
 }


}
