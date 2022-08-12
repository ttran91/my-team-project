import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VendorComponent } from '../vendor.component';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  postApi: string;
  deleteApi: string;
  getApi:string;


  orderForm$ = new BehaviorSubject<VendorComponent[]>([]);
  orderStat$ = new BehaviorSubject<OrderForm[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);



  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8122/orderForm';
    this.getAllApi='http://localhost:8122/orderForm';
    this.deleteApi='http://localhost:8122/orderForm/';
    this.getStatsApi='http://localhost:8122/orderForm/stats';


  
   }

   public postOrderForm(orderForm: OrderForm): Observable<OrderForm>{
    return this.http.post<OrderForm>(this.postApi, orderForm);
   }

   getAllOrderForm(page: number,size: number) : Observable<OrderForm[]>{
    return this.http.get<OrderForm[]>(this.getAllApi + '?page='+page+'&size='+size);
   }

   deleteOrderForm(oid: number): Observable<any> {
  
    return this.http.delete<any>(this.deleteApi + oid);
   }

   getOrderFormStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.getStatsApi);

   }


}