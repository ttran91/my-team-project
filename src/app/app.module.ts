import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceOrderComponent,
    ViewOrderComponent,
    DashboardComponent,
    AddFundsComponent,
    ViewAccountDetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
