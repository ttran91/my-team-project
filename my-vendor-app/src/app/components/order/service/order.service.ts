import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderForm } from '../model/order.model';
import { Stat } from '../model/Stat.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  postApi: string;
  getAllApi: string;
  deleteApi: string;
  getStatsApi: string;


  orderForm$ = new BehaviorSubject<OrderForm[]>([]);
  orderStat$ = new BehaviorSubject<OrderForm[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);



  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8173/orderForm';
    this.getAllApi='http://localhost:8173/orderForm';
    this.deleteApi='http://localhost:8173/orderForm/';
    this.getStatsApi='http://localhost:8173/orderForm/stats';
  
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
