import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ModelComponent } from './model/model.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { OrderComponent } from './components/order/order/order.component';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderStatComponent } from './components/order/order-stat/order-stat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ModelComponent,
    VendorComponent,
    OrderComponent,
    OrderAddComponent,
    OrderListComponent,
    OrderStatComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
