import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  getInventoryApi='http://localhost:8173/inventory';
  constructor(private http: HttpClient) { }

  fetchInventory() : Observable<Inventory[]>{
     return this.http.get<Inventory[]>(this.getInventoryApi);
  }
}
