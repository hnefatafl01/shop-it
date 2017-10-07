import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cart' },
  {
    path: 'cart', component: CartComponent, children: [
      { path: ':id', component: CartDetailComponent },
      { path: '', component: CartListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot([]),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { enableTracing: true }
