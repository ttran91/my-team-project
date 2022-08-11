import { Component, OnInit } from '@angular/core';
import { Inventory } from '../model/inventory.model';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory: Inventory[];
  errorMsg:string;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.errorMsg='';
    this.inventoryService.fetchInventory().subscribe({
      next: (data) => {
              this.inventory = data
            },
      error: (e) => {
        this.errorMsg ='Inventory could not be fetched..'
      }

  });
  }

}
