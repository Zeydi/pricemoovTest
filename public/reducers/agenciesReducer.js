import { LOADING_AGENCIES } from '../actions/agenciesActions';
import { LOADING_CATEGORIES } from '../actions/categoriesActions';

const initialState = {
  agencies: [],
  agency: {}
};

export function agenciesReducer(state = initialState, action){
  switch(action.type){
    case LOADING_AGENCIES:
      return {
        ...state,
        agencies: action.payload
      }
      break;
    case LOADING_CATEGORIES:
      return {
        ...state,
        agency: action.payload.agency
      }
    default:
      return state
  }
}
