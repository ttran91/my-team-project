import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ModelComponent } from './model/model.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { OrderComponent } from './components/order/order/';
import { OrderAddComponent } from './components/order/order-add/order-add';
import { OrderListComponent } from './components/order/order-list/order-list';
import { OrderStatComponent } from './components/order/order-stat/order-stat';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ModelComponent,
    VendorComponent,
    OrderComponent,
    OrderAddComponent,
    OrderListComponent,
    OrderStatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
