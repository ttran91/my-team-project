import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { AuthguardService } from './auth/service/authguard.service';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ShowFoodsComponent } from './components/show-foods/show-foods.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

const routes: Routes = [
  {path:'' ,component: DashboardComponent},
  {path:'PlaceOrder' ,component: PlaceOrderComponent,canActivate:[AuthguardService]},
  {path:'sign-up' ,component:SignUpComponent},
  {path:'login' , component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'password-reset' ,component: UsernameVerifyComponent},
  {path:'password-reset-form' ,component: PasswordResetComponent},
  {path:'ShowFood' , component: ShowFoodsComponent},
  {path:'Dashboard' ,component: DashboardComponent},
  {path:'ViewOrder' ,component: ViewOrderComponent, canActivate:[AuthguardService]},
  {path:'ViewAccountDetails', component: ViewAccountDetailsComponent, canActivate:[AuthguardService]},
  {path: 'AddBalance' , component: AddFundsComponent, canActivate:[AuthguardService]},
  {path: 'profile' ,component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
