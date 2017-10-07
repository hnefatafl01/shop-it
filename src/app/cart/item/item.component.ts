import { AddToBag } from './../store/cart.actions';
import { FeatureState } from './../store/cart.reducers';
import { Input, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCart from '../store/cart.reducers';
import * as CartActions from '../store/cart.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product;
  constructor(private store: Store<fromCart.State>) { }

  ngOnInit() { }

  onAddToBag() {
    if (this.product.inStock) {
      this.store.dispatch(new CartActions.AddToBag(this.product));
    }
  }
}
