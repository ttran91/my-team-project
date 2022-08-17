import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { ShowFoodsComponent } from './components/show-foods/show-foods.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFundsComponent,
    PlaceOrderComponent,
    ViewAccountDetailsComponent,
    ViewOrderComponent,
    LoginComponent,
    LogoutComponent,
    PasswordResetComponent,
    ProfileComponent,
    UsernameVerifyComponent,
    ShowFoodsComponent,
    DashboardComponent,
    SignUpComponent,
    EditProfileComponent
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
