import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PaymentComponent } from './pages/payment/payment.component';

function auth() {
  if (localStorage.getItem('user')) {
    return true;
  } else {
    window.location.href = '/login';
  }
  return false;
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-view', component: ProductViewComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [auth] },
  {path: 'payment', component: PaymentComponent, canActivate: [auth]},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
