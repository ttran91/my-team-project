import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderForm } from '../model/order.model';
import { OrderFormEditDto } from '../model/OrderFormEdit';
import { Stat } from '../model/Stat.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  postApi: string;
  getAllApi: string;
  deleteApi: string;
  getStatsApi: string;
  getOrderFormByIdApi: string;
  editApi: string;

  orderForm$ = new BehaviorSubject<OrderForm[]>([]);
  orderStat$ = new BehaviorSubject<any>(0);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);




  constructor(private http: HttpClient) {
    this.postApi= environment.serverUrl+'/orderForm';
    this.getAllApi=environment.serverUrl+'/orderForm';
    this.deleteApi=environment.serverUrl+'/orderForm/';
    this.getStatsApi=environment.serverUrl+'/orderForm/stats';
    this.getOrderFormByIdApi='http://localhost:8173/orderForm/single/';
    this.editApi='http://localhost:8173/orderForm/edit';


  
   }

   public postOrderForm(orderForm: OrderForm): Observable<OrderForm>{
    return this.http.post<OrderForm>(this.postApi, orderForm);
   }

   getAllOrderForm(page: number,size: number) : Observable<OrderForm[]>{
    return this.http.get<OrderForm[]>
                            (this.getAllApi + '?page='+page+'&size='+size);
   }

   deleteOrderForm(oid: number): Observable<any> {
  
    return this.http.delete<any>(this.deleteApi + oid);
   }

   getOrderFormStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.getStatsApi);

   }

   getOrderFormById(id: number) : Observable<OrderFormEditDto> {
    return this.http.get<OrderFormEditDto>(this.getOrderFormByIdApi + id);
  }
  updateOrderFromById(id, data) : Observable<OrderFormEditDto>{ 
    return this.http.put<OrderFormEditDto>(`${this.editApi}/${id}`, data);
  }


   }


