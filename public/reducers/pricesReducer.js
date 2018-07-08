import { LOADING_PRICES } from '../actions/pricesActions';

const initialState = {
  prices: [],
};

export function pricesReducer(state = initialState, action){
  switch(action.type){
    case LOADING_PRICES:
      return {
        ...state,
        prices: action.payload.data
      }
      break;
    default:
      return state
  }
}
