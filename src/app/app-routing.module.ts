import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

const routes: Routes = [
  {path:'' ,component: HomepageComponent},
  {path:'PlaceOrder' ,component: PlaceOrderComponent},
  {path:'Home' ,component: HomepageComponent},
  {path:'ViewOrder' ,component: ViewOrderComponent},
  {path:'ViewAccountDetails', component: ViewAccountDetailsComponent},
  {path: 'AddBalance' , component: AddFundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }