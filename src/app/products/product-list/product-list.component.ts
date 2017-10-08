import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as fromProducts from '../store/products.reducers';
import { Observable } from 'rxjs/Observable';

import { Item } from './../../shared/item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  direction: string;
  productsState: Observable<fromProducts.State>;
  productList;
  constructor(public store: Store<fromProducts.FeatureState>) { }

  ngOnInit() {
    this.productsState = this.store.select('products');
    this.productsState.subscribe(products => this.productList = products.productList);
  }
}
