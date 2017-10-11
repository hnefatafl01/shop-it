import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Item } from './../shared/item.model';
import * as fromProducts from '../products/store/products.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutState: Observable<fromProducts.State>;
  total: number;
  subtotal: number;
  bag: Item[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.total = 0;
    this.checkoutState = this.store.select('products');
    this.checkoutState.subscribe((products) => {
      this.bag = products.bagList;
      this.bag.forEach((item: Item) => {
        this.subtotal = item.price * item.quantity;
        this.total += this.subtotal;
      });
    });
  }

}
