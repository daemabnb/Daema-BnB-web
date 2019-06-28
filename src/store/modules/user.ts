import { getToken } from '../../lib';

export interface UserState {
  token: string;
  isAdmin: boolean;
}

export const CHANGE_TOKEN = 'user/CHANGE_TOKEN';
export const CHANGE_ADMIN_STATE = 'user/CHANGE_ADMIN_STATE';

interface ChangeTokenAction {
  type: typeof CHANGE_TOKEN;
  token: string;
}
interface ChangeAdminStateAction {
  type: typeof CHANGE_ADMIN_STATE;
  isAdmin: boolean;
}

export type UserActionTypes = ChangeTokenAction | ChangeAdminStateAction;

const changeToken = (token: string) => {
  return {
    type: CHANGE_TOKEN,
    token,
  };
};
const changeAdminState = (isAdmin: boolean) => {
  return {
    type: CHANGE_ADMIN_STATE,
    isAdmin,
  };
};

export const actionCreators = {
  changeToken,
  changeAdminState,
};

const initialState: UserState = {
  token: getToken() || '',
  isAdmin: false,
};

export function userReducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case 'user/CHANGE_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'user/CHANGE_ADMIN_STATE':
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    default:
      return state;
  }
}
