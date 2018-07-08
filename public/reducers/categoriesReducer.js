import { LOADING_CATEGORIES } from '../actions/categoriesActions';
import { LOADING_PRICES } from '../actions/pricesActions';

const initialState = {
  categories: [],
  category: {}
};

export function categoriesReducer(state = initialState, action){
  switch(action.type){
    case LOADING_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data,
      }
      break;
    case LOADING_PRICES:
        return {
          ...state,
          category: action.payload.category
        }
    default:
      return state
  }
}
