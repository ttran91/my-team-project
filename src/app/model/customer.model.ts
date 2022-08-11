export class Customer{
    customerid: number;
    customerName:string;
    cutomerPhone:string;
    customerEmail:string;
    customerBalance: number;
}
export class CustomerEditDto{
    id?:number;
    name:string;
    phone:string;
    email:string;
}
export class customerBalanceEditDto{
    id?: number;
    balance:number;
}