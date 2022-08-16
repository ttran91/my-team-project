import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Customer, CustomerEditDto } from '../model/customer.model';



@Injectable({
    providedIn: 'root'
})



export class CustomerService{
     
    getcustApi: string;
    postAccDetApi:string;
    postAccBalApi: string;
    getAllCustomersApi: string;
    editAccountDetailsApi: string;

    CustomerEditDto:string;
    customerBalanceEditDto:string;
    

     constructor(private http: HttpClient) {
        this.getcustApi = "http://localhost:4401/customer/";
        this.postAccDetApi="http://localhost:4401/customer/";
        this.postAccBalApi="http://localhost:4401/customer/balance/";
        this.getAllCustomersApi="http://localhost:4401/customer";
        this.editAccountDetailsApi = "http://localhost:4401/customer/";
       
     }
     getSingleCustomer(idCustomer: number): Observable<any>{
        return this.http.get<any>(this.getcustApi +idCustomer);

     }
     getAllCustomers(){
      return this.http.get<Customer[]>(this.getAllCustomersApi);
     }
     postCustomerDetails(customerEditDto: CustomerEditDto) : Observable<CustomerEditDto> {
      let httpOptions={
          headers : new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization' : 'basic ' + localStorage.getItem('credentials')
          })
        };
      return this.http.put<CustomerEditDto>(this.editAccountDetailsApi, customerEditDto, httpOptions);
  }

    
    
  

}
