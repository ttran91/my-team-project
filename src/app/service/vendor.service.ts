import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Food } from '../model/food.model';
import { Vendor } from '../model/vendor.model';


@Injectable({
    providedIn: 'root'
})



export class VendorService {

    getallVendorApi: string;

    constructor(private http: HttpClient) {
        this.getallVendorApi = "http://localhost:4401/vendor";

    }
    fetchVendors(): Observable<Vendor[]> {
        return this.http.get<Vendor[]>(this.getallVendorApi);
    }
}