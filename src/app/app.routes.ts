import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Shop } from './components/shop/shop';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from './components/cart/cart';
import { Profile } from './components/profile/profile';
import { About } from './components/about/about';
import { Careers } from './components/careers/careers';
import { Auth } from './components/auth/auth';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'shop', component: Shop },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'profile', component: Profile },
  { path: 'about', component: About },
  { path: 'careers', component: Careers },
  { path: 'auth', component: Auth },
  { path: '**', redirectTo: '' }
];