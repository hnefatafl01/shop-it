import { ActionReducerMap } from '@ngrx/store';

import * as fromProducts from '../products/store/products.reducers';

export interface AppState {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productsReducers
};

