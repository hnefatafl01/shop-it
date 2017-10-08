import { Store } from '@ngrx/store';
import { Item } from '../../shared/item.model';
import * as ProductsActions from './products.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  productsState: State;
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
      false,
      1,
      0
    ),
    new Item(
      'https://images.pexels.com/photos/32266/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb',
      2.00,
      'finest tea',
      'Mean Green',
      true,
      1,
      1
    ),
    new Item(
      'https://images.pexels.com/photos/84475/night-product-watch-dramatic-84475.jpeg?h=350&auto=compress&cs=tinysrgb',
      1.00,
      'keeping time before anyone else',
      'hipster watch',
      true,
      1,
      5
    )
  ],
  bagList: []
};

export function productsReducers(state = initialState, action: ProductsActions.ProductsActions) {
  switch (action.type) {
    case ProductsActions.ADD_TO_BAG:
      let stock = [...state.productList];
      let bag = [...state.bagList];
      let product = stock[stock.indexOf(action.payload)];
      if (product.quantity > 0) {
        let bagItem = { ...action.payload };
        bagItem.quantity = 0;
        product.quantity -= action.payload.selectedQty;
        if (bag.length === 0) {
          bagItem.quantity = action.payload.selectedQty;
          bag.push(bagItem);
        } else {
          for (let i = 0; i < bag.length; i++) {
            if (bagItem.title !== bag[i].title) {
              bag.push(bagItem);
            } else {
              bag[i].quantity += bagItem.selectedQty;
            }
          }
        }
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
