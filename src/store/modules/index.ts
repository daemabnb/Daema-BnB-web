import { combineReducers } from 'redux';
import { RegistrationState, registerReducer as registration } from './register';

export interface StoreState {
  registration: RegistrationState;
}

export default combineReducers<StoreState>({
  registration,
});
