import { combineReducers } from 'redux';
import { UserState, userReducer as user } from './user';
import { ShareItemState, shareItemReducer as shareItem } from './shareItem';
import { SaleItemState, saleItemReducer as saleItem } from './saleItem';

export interface StoreState {
  user: UserState;
  shareItem: ShareItemState;
  saleItem: SaleItemState;
}

export default combineReducers<StoreState>({
  user,
  shareItem,
  saleItem,
});
