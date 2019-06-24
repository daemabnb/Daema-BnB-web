import { combineReducers } from 'redux';
import { RegistrationState, registerReducer as registration } from './register';
import { UserState, userReducer as user } from './user';

export interface StoreState {
  registration: RegistrationState;
  user: UserState;
}

export default combineReducers<StoreState>({
  registration,
  user,
});
