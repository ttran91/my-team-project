import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderStatComponent } from './components/order/order-stat/order-stat.component';
import { OrderComponent } from './components/order/order/order.component';


const routes: Routes = [

  
  {path:  'order', component: OrderComponent},
  {path: 'order-add' , component: OrderAddComponent},
  {path: 'order-list' , component: OrderListComponent},
  {path: 'order-stat' , component: OrderStatComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
