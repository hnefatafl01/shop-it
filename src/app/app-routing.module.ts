import { CheckoutComponent } from './checkout/checkout.component';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  {
    path: 'products', component: ProductsComponent, children: [
      // { path: ':id', component: ProductDetailComponent },
      { path: '', component: ProductListComponent }
    ]
  },
  { path: 'checkout', component: CheckoutComponent }
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
