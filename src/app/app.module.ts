import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowFoodsComponent } from './components/show-foods/show-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceOrderComponent,
    ViewOrderComponent,
    DashboardComponent,
    AddFundsComponent,
    ViewAccountDetailsComponent,
    HomepageComponent,
    LoginComponent,
    LogoutComponent,
    PasswordResetComponent,
    ProfileComponent,
    SignUpComponent,
    UsernameVerifyComponent,
    ShowFoodsComponent
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
