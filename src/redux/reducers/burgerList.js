import { burgerConstants } from '../constant/burger';
import { BURGER_LIST } from '../../_constants/burger';

const initialState = {
  loader: false,
  burger_list: [...BURGER_LIST],
  error: '',
};

export function burgerList(state = initialState, action) {
  switch (action.type) {
    case burgerConstants.BURGER_LIST_REQUEST:
      return {
        loader: true,
      };
    case burgerConstants.BURGER_LIST_REQUEST_SUCCESS:
      return {
        loader: false,
        burger_list: action.burger_list,
      };
    case burgerConstants.BURGER_LIST_REQUEST_FAILURE:
      return {
        loader: false,
        error: action.error,
      };
    default:
      return state;
  }
}
