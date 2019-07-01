import { Moment } from 'moment';

export interface ShareItemState {
  name: string;
  images: File[];
  explanation: string;
  price: number;
  date: Moment | null;
  period: number;
  isPublic: boolean;
}

export const REFRESH_ITEM = 'shareItem/REFRESH_ITEM';
export const CHANGE_NAME = 'shareItem/CHANGE_NAME';
export const CHANGE_IMAGE = 'shareItem/CHANGE_IMAGE';
export const DELETE_IMAGE = 'shareItem/DELETE_IMAGE';
export const CHANGE_EXPLANATION = 'shareItem/CHANGE_EXPLANATION';
export const CHANGE_PRICE = 'shareItem/CHANGE_PRICE';
export const CHANGE_DATE = 'shareItem/CHANGE_DATE';
export const CHANGE_PERIOD = 'shareItem/CHANGE_PERIOD';
export const CHANGE_IS_PUBLIC = 'shareItem/CHANGE_IS_PUBLIC';

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
interface ChangeDateAction {
  type: typeof CHANGE_DATE;
  date: Moment | null;
}
interface ChangePeriodAction {
  type: typeof CHANGE_PERIOD;
  period: number;
}
interface ChangeIsPublicAction {
  type: typeof CHANGE_IS_PUBLIC;
  isPublic: boolean;
}

export type ShareItemActionTypes =
  | RefreshItemAction
  | ChangeNameAction
  | ChangeImageAction
  | DeleteImageAction
  | ChangeExplanationAction
  | ChangePriceAction
  | ChangeDateAction
  | ChangePeriodAction
  | ChangeIsPublicAction;

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
function changeDate(date: Moment | null) {
  return {
    type: CHANGE_DATE,
    date,
  };
}
function changePeriod(period: number) {
  return {
    type: CHANGE_PERIOD,
    period,
  };
}
function changeIsPublic(isPublic: boolean) {
  return {
    type: CHANGE_IS_PUBLIC,
    isPublic,
  };
}

export const actionCreators = {
  refreshItem,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
  changeDate,
  changePeriod,
  changeIsPublic,
};

export interface ShareItemActionCreators {
  refreshItem(): void;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
  changeDate(date: Moment | null): void;
  changePeriod(period: number): void;
  changeIsPublic(isPublic: boolean): void;
}

const initialState: ShareItemState = {
  name: '',
  images: [],
  explanation: '',
  price: 0,
  date: null,
  period: 0,
  isPublic: false,
};

export function shareItemReducer(
  state = initialState,
  action: ShareItemActionTypes,
): ShareItemState {
  switch (action.type) {
    case 'shareItem/REFRESH_ITEM':
      return initialState;
    case 'shareItem/CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'shareItem/CHANGE_IMAGE':
      const newImages1 = [...state.images];
      newImages1[action.index] = action.image[0];
      return {
        ...state,
        images: newImages1,
      };
    case 'shareItem/DELETE_IMAGE':
      const newImages2 = [...state.images];
      newImages2.splice(action.index, 1);
      return {
        ...state,
        images: newImages2,
      };
    case 'shareItem/CHANGE_EXPLANATION':
      return {
        ...state,
        explanation: action.explanation,
      };
    case 'shareItem/CHANGE_PRICE':
      return {
        ...state,
        price: action.price,
      };
    case 'shareItem/CHANGE_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'shareItem/CHANGE_PERIOD':
      return {
        ...state,
        period: action.period,
      };
    case 'shareItem/CHANGE_IS_PUBLIC':
      return {
        ...state,
        isPublic: action.isPublic,
      };
    default:
      return state;
  }
}
