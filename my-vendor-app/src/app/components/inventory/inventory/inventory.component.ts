import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inventory } from '../model/inventory.model';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[];
  inventories: Inventory[];
  page: number;
  size: number;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.subscriptions =[];
    this.size = 5;
    this.subscriptions.push(
      this.inventoryService.page$.subscribe(value=>{
        this.page = value;
        this.inventoryService.getAllInventory(this.page,this.size)
        .subscribe({
          next: (data)=>{
            this.inventories = data;
            this.inventoryService.inventory$.next(this.inventories);
          },
          error: (e)=>{
              
          }
        });

      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=>sub.unsubscribe());
 }



}
