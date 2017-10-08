import { AddToBag } from './../store/products.actions';
import { FeatureState } from './../store/products.reducers';
import { Input, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProducts from '../store/products.reducers';
import * as ProductsActions from '../store/products.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product;
  constructor(private store: Store<fromProducts.State>) { }

  ngOnInit() { }

  onAddToBag() {
    if (this.product.inStock) {
      this.store.dispatch(new ProductsActions.AddToBag(this.product));
    }
  }
}
