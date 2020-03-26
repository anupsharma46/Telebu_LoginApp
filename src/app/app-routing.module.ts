import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductinfoComponent} from './dashboard/product/productinfo/productinfo.component';
import {ThankyouComponent} from './dashboard/product/thankyou/thankyou.component';
import {CartComponent} from './dashboard/product/cart/cart.component';
import { AuthGuard } from './guards/auth.guard'; 
import { Auth2Guard } from './guards/auth2.guard'; 

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate : [Auth2Guard]},
  { path: 'productinfo/:p_id', component: ProductinfoComponent,canActivate : [AuthGuard]},
  { path: 'cart', component: CartComponent,canActivate : [AuthGuard]},
  { path: 'thankyou', component: ThankyouComponent,canActivate : [AuthGuard]},
  { path : '', component : LoginComponent},
  { path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

