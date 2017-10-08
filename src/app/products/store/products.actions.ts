import { Action } from '@ngrx/store';
import { Item } from '../../shared/item.model';

export const ADD_TO_BAG = 'ADD_TO_BAG';

export class AddToBag implements Action {
  readonly type = ADD_TO_BAG;
  constructor(public payload: Item) {}
}

export type ProductsActions = AddToBag;
