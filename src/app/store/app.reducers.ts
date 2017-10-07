import { CartActions } from './../cart/store/cart.actions';
import { ActionReducerMap } from '@ngrx/store';

import * as fromCart from '../cart/store/cart.reducers';

export interface AppState {
  cart: fromCart.State;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducers
};

