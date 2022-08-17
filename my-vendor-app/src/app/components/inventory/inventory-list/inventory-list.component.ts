import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inventory } from '../model/inventory.model';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories: Inventory[];
  page: number;
  

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.inventory$.subscribe(data=>{
      this.inventories = data;
    });
  }

  prev(){
    let page = this.inventoryService.page$.getValue();
    //update the value of page
    if(page >0){
     this.page = page-1;
     //attach the updated value to the subject
      this.inventoryService.page$.next(this.page);

  }
}
  next(){
    //read the value of page from subject
    let page = this.inventoryService.page$.getValue();
    //update the value of page
    this.page = page + 1;
    //attach the updated value to the subject
    this.inventoryService.page$.next(this.page);
}


  }



