import { Action } from '@ngrx/store';
import { Item } from '../../shared/item.model';

// export const SET_CART = 'SET_CART';
export const ADD_TO_BAG = 'ADD_TO_BAG';

// export class SetCart implements Action {
//   readonly type = SET_CART;
//   constructor(public payload: Item[]) { }
// }

export class AddToBag implements Action {
  readonly type = ADD_TO_BAG;
  constructor(public payload: Item) {}
}

export type CartActions = AddToBag;
