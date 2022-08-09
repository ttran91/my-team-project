import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  postApi: string;

  constructor(private http: HttpClient) {
    this.postApi='http://localhost:8173'
   }
}
