import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as fromCart from '../store/cart.reducers';
import { Observable } from 'rxjs/Observable';

import { Item } from './../../shared/item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartState: Observable<fromCart.State>;
  productList;
  constructor(public store: Store<fromCart.FeatureState>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');
    this.cartState.subscribe(cart => this.productList = cart.productList);
  }
}
