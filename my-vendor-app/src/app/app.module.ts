import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AuthComponent } from './auth/auth.component';
import { ModelComponent } from './model/model.component';
import { ServiceComponent } from './service/service.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { OrderComponent } from './components/order/order.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderStatComponent } from './order/order-stat/order-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AuthComponent,
    ModelComponent,
    ServiceComponent,
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
