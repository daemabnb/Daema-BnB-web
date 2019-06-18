import { Moment } from 'moment';

export interface RegistrationState {
  name: string;
  images: File[];
  explanation: string;
  price: number;
  date: Moment | null;
  period: number;
  isPublic: boolean;
}

export const DELETE_REGISTRATION = 'register/DELETE_REGISTRATION';
export const CHANGE_NAME = 'register/CHANGE_NAME';
export const CHANGE_IMAGE = 'register/CHANGE_IMAGE';
export const DELETE_IMAGE = 'regiser/DELETE_IMAGE';
export const CHANGE_EXPLANATION = 'register/CHANGE_EXPLANATION';
export const CHANGE_PRICE = 'register/CHANGE_PRICE';
export const CHANGE_DATE = 'register/CHANGE_DATE';
export const CHANGE_PERIOD = 'register/CHANGE_PERIOD';
export const CHANGE_IS_PUBLIC = 'registser/CHANGE_IS_PUBLIC';

interface DeleteRegistrationAction {
  type: typeof DELETE_REGISTRATION;
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

export type RegistrationActionTypes =
  | DeleteRegistrationAction
  | ChangeNameAction
  | ChangeImageAction
  | DeleteImageAction
  | ChangeExplanationAction
  | ChangePriceAction
  | ChangeDateAction
  | ChangePeriodAction
  | ChangeIsPublicAction;

function deleteRegistration() {
  return {
    type: DELETE_REGISTRATION,
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
  deleteRegistration,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
  changeDate,
  changePeriod,
  changeIsPublic,
};

const initialState: RegistrationState = {
  name: '',
  images: [],
  explanation: '',
  price: 0,
  date: null,
  period: 0,
  isPublic: false,
};

export function registerReducer(
  state = initialState,
  action: RegistrationActionTypes,
): RegistrationState {
  switch (action.type) {
    case 'register/DELETE_REGISTRATION':
      return initialState;
    case 'register/CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'register/CHANGE_IMAGE':
      const newImages1 = [...state.images];
      newImages1[action.index] = action.image[0];
      return {
        ...state,
        images: newImages1,
      };
    case 'regiser/DELETE_IMAGE':
      const newImages2 = [...state.images];
      newImages2.splice(action.index, 1);
      return {
        ...state,
        images: newImages2,
      };
    case 'register/CHANGE_EXPLANATION':
      return {
        ...state,
        explanation: action.explanation,
      };
    case 'register/CHANGE_PRICE':
      return {
        ...state,
        price: action.price,
      };
    case 'register/CHANGE_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'register/CHANGE_PERIOD':
      return {
        ...state,
        period: action.period,
      };
    case 'registser/CHANGE_IS_PUBLIC':
      return {
        ...state,
        isPublic: action.isPublic,
      };
    default:
      return state;
  }
}
