import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Customer } from '../model/customer.model';



@Injectable({
    providedIn: 'root'
})



export class CustomerService {

    getcustApi: string;
    postAccDetApi: string;
    postAccBalApi: string;
    getAllCustomersApi: string;

    CustomerEditDto: string;
    customerBalanceEditDto: string;


    constructor(private http: HttpClient) {
        this.getcustApi = "http://localhost:8181/customer/";
        this.postAccDetApi = "http://localhost:8181/customer/";
        this.postAccBalApi = "http://localhost:8181/customer/balance/";
        this.getAllCustomersApi = "http://localhost:8181/customer"

    }
    getSingleCustomer(idCustomer: number): Observable<any> {
        return this.http.get<any>(this.getcustApi + idCustomer);

    }
    getAllCustomers() {
        return this.http.get<Customer[]>(this.getAllCustomersApi);
    }



}