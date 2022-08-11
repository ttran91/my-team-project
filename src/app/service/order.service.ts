import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Order } from "../model/order.model";


@Injectable({
    providedIn: 'root'
})

export class OrderService {

    placeOrderApi: string;
    getOrderByIdApi: string;

    constructor(private http: HttpClient) {
        this.placeOrderApi = "http://localhost:8181/order";
        this.getOrderByIdApi = "http://localhost:8181/order/single"

    }
    getSingleOrder(oid: number): Observable<Order[]> {
        return this.http.get<Order[]>(this.getOrderByIdApi + oid);
    }
    placeOrder(Order: Order): Observable<any> {
        return this.http.post(this.placeOrderApi, Order);
    }

}