import { Store } from '@ngrx/store';
import { Item } from '../../shared/item.model';
import * as CartActions from './cart.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  cartState: State;
}

export interface State {
  productList: Item[];
  bagList: Item[];
}

const initialState: State = {
  productList: [
    new Item(
      'https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
      4.00,
      '8oz energy drink',
      'Energicos',
      true,
      1,
      1
    ),
    new Item(
      'https://images.pexels.com/photos/32266/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb',
      2.00,
      'finest tea',
      'Mean Green',
      true,
      1,
      10
    ),
    new Item(
      'https://images.pexels.com/photos/84475/night-product-watch-dramatic-84475.jpeg?h=350&auto=compress&cs=tinysrgb',
      1.00,
      'keeping time before anyone else',
      'hipster watch',
      true,
      1,
      10
    )
  ],
  bagList: []
};

export function cartReducers(state = initialState, action: CartActions.CartActions) {
  switch (action.type) {
    case CartActions.ADD_TO_BAG:
      let stock = [...state.productList];
      let bag = [...state.bagList];
      if(stock[stock.indexOf(action.payload)].quantity > 0) {
        let product = stock[stock.indexOf(action.payload)];
        if (product.quantity < 1) {
          product.inStock = false;
        }
        product.quantity--;
        bag.push(action.payload);
        bag[bag.indexOf(action.payload)].quantity = Math.abs(product.quantity - bag[bag.indexOf(action.payload)].quantity);
      } else {
        stock[stock.indexOf(action.payload)].inStock = false;
      }
      return {
        ...state,
        productList: stock,
        bagList: bag
      };
    default:
      return { ...state };
  }
}
