import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Customer } from "../model/customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    postApi: string;

    constructor(private http: HttpClient) {
        this.postApi = 'http://localhost:8181/customer';
    }

    postCustomer(idCustomer: Customer): Observable<any> {
        return this.http.post(this.postApi, + idCustomer);
    }
}