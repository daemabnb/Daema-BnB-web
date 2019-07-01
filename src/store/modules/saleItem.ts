export interface SaleItemState {
  name: string;
  images: File[];
  explanation: string;
  price: number;
}

export const REFRESH_ITEM = 'saleItem/REFRESH_ITEM';
export const CHANGE_NAME = 'saleItem/CHANGE_NAME';
export const CHANGE_IMAGE = 'saleItem/CHANGE_IMAGE';
export const DELETE_IMAGE = 'saleItem/DELETE_IMAGE';
export const CHANGE_EXPLANATION = 'saleItem/CHANGE_EXPLANATION';
export const CHANGE_PRICE = 'saleItem/CHANGE_PRICE';

interface RefreshItemAction {
  type: typeof REFRESH_ITEM;
}
interface ChangeNameAction {
  type: typeof CHANGE_NAME;
  name: string;
}
interface ChangeImageAction {
  type: typeof CHANGE_IMAGE;
  index: number;
  image: FileList;
}
interface DeleteImageAction {
  type: typeof DELETE_IMAGE;
  index: number;
}
interface ChangeExplanationAction {
  type: typeof CHANGE_EXPLANATION;
  explanation: string;
}
interface ChangePriceAction {
  type: typeof CHANGE_PRICE;
  price: number;
}

export type SaleItemActionTypes =
  | RefreshItemAction
  | ChangeNameAction
  | ChangeImageAction
  | DeleteImageAction
  | ChangeExplanationAction
  | ChangePriceAction;

function refreshItem() {
  return {
    type: REFRESH_ITEM,
  };
}
function changeName(name: string) {
  return {
    type: CHANGE_NAME,
    name,
  };
}
function changeImage(index: number, image: FileList) {
  return {
    type: CHANGE_IMAGE,
    index,
    image,
  };
}
function deleteImage(index: number) {
  return {
    type: DELETE_IMAGE,
    index,
  };
}
function changeExplanation(explanation: string) {
  return {
    type: CHANGE_EXPLANATION,
    explanation,
  };
}
function changePrice(price: number) {
  return {
    type: CHANGE_PRICE,
    price,
  };
}

export const actionCreators = {
  refreshItem,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
};

export interface SaleItemActionCreators {
  refreshItem(): void;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
}

const initialState: SaleItemState = {
  name: '',
  images: [],
  explanation: '',
  price: 0,
};

export function saleItemReducer(
  state = initialState,
  action: SaleItemActionTypes,
): SaleItemState {
  switch (action.type) {
    case 'saleItem/REFRESH_ITEM':
      return initialState;
    case 'saleItem/CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'saleItem/CHANGE_IMAGE':
      const newImages1 = [...state.images];
      newImages1[action.index] = action.image[0];
      return {
        ...state,
        images: newImages1,
      };
    case 'saleItem/DELETE_IMAGE':
      const newImages2 = [...state.images];
      newImages2.splice(action.index, 1);
      return {
        ...state,
        images: newImages2,
      };
    case 'saleItem/CHANGE_EXPLANATION':
      return {
        ...state,
        explanation: action.explanation,
      };
    case 'saleItem/CHANGE_PRICE':
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
}
