import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inventory } from '../model/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
getInventoryApi: string;
postInventoryApi: string;


inventory$ = new BehaviorSubject<Inventory[]>([]);
page$ = new BehaviorSubject<number>(0);


  

  constructor(private http: HttpClient) { 
    this.getInventoryApi='http://localhost:8173/inventory';
    this.postInventoryApi='http://localhost:8173/inventory';

  }


  getAllInventory(page: number, size: number): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.getInventoryApi + '?page='+page+'&size='+size);
  }

  postInventoryForm(inventory: Inventory): Observable<Inventory>{
    return this.http.post<Inventory>(this.postInventoryApi, inventory);
   }
  }


  

