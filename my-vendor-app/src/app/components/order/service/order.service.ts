import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderForm } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  postApi: string;
  getAllApi: string;


  orderForm$ = new BehaviorSubject<OrderForm[]>([]);
  page$ = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8173/orderForm';
    this.getAllApi='http://localhost:8173/orderForm';
  
   }

   public postOrderForm(orderForm: OrderForm): Observable<OrderForm>{
    return this.http.post<OrderForm>(this.postApi, orderForm);
   }

   getAllOrderForm(page: number,size: number) : Observable<OrderForm[]>{
    return this.http.get<OrderForm[]>(this.getAllApi + '?page='+page+'&size='+size);
   }
}
