import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodStatComponent } from './components/food/food-stat/food-stat.component';
import { FoodListComponentRxjs } from './components/food/food-list/food-list.component';
import { FoodAddComponentRxjs } from './components/food/food-add/food-add.component';
import { FoodComponent } from './components/food/food/food.component';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { InventoryComponent } from './components/inventory/inventory/inventory.component';



@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    FoodComponent,
    InventoryComponent,
    OrderComponent,
    FoodStatComponent,
    FoodListComponentRxjs,
    FoodAddComponentRxjs,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    ProfileComponent,
    PasswordResetComponent,
    UsernameVerifyComponent,
    
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
