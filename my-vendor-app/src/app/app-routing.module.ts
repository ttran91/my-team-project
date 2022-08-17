import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/component/login/login.component';
import { LogoutComponent } from './auth/component/logout/logout.component';
import { PasswordResetComponent } from './auth/component/password-reset/password-reset.component';
import { ProfileComponent } from './auth/component/profile/profile.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { UsernameVerifyComponent } from './auth/component/username-verify/username-verify.component';
import { VendorSignupComponent } from './auth/component/vendor-signup/vendor-signup.component';
import { AuthguardService } from './auth/service/authguard.service';
import { FoodComponent } from './components/food/food/food.component';
import { InventoryAddComponent } from './components/inventory/inventory-add/inventory-add.component';
import { InventoryListComponent } from './components/inventory/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory/inventory.component';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderStatComponent } from './components/order/order-stat/order-stat.component';
import { OrderComponent } from './components/order/order/order.component';

const routes: Routes = [

  {path: '' , component: LoginComponent},
  {path:  'order', component: OrderComponent,
                    canActivate:[AuthguardService]},
  {path:'login' ,component: LoginComponent},

  {path: 'food' , component: FoodComponent,
                    canActivate:[AuthguardService]},
  {path: 'inventory' , component: InventoryComponent,
                    canActivate:[AuthguardService]},
  {path:'inventory-add' ,component: InventoryAddComponent},  
  {path:'inventory-list' ,component: InventoryListComponent},                 
  {path:'logout' ,component: LogoutComponent},
  {path:'sign-up' ,component: SignUpComponent},
  {path:'profile' ,component: ProfileComponent,
                  canActivate:[AuthguardService] },
  {path:'password-reset' ,component: UsernameVerifyComponent},
  {path:'password-reset-form' ,component: PasswordResetComponent},
  {path: 'order-add' , component: OrderAddComponent},
  {path: 'order-list' , component: OrderListComponent},
  {path: 'order-stat' , component: OrderStatComponent},
  {path: 'order-edit/:id' , component: OrderEditComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
