import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HouseComponent } from './house/house.component';

export const routes: Routes = [
    { path: 'cart', component: CartComponent },
    { path: 'house', component: HouseComponent },
];
