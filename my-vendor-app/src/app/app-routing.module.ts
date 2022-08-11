import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { AuthguardService } from './auth/service/authguard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodComponent } from './components/food/food/food.component';
import { InventoryComponent } from './components/inventory/inventory/inventory.component';

const routes: Routes = [

  {path: '' , component: DashboardComponent},
  {path:'dashboard' ,component: DashboardComponent},
  {path:'login' ,component: LoginComponent},

  {path: 'food' , component: FoodComponent,
                    canActivate:[AuthguardService]},
  {path: 'inventory' , component: InventoryComponent,
                    canActivate:[AuthguardService]},
  {path:'logout' ,component: LogoutComponent},
  {path:'sign-up' ,component: SignUpComponent},
  {path:'profile' ,component: ProfileComponent,
                  canActivate:[AuthguardService] },
  {path:'password-reset' ,component: UsernameVerifyComponent},
  {path:'password-reset-form' ,component: PasswordResetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
