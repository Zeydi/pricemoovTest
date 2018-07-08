import {combineReducers} from 'redux';

import { agenciesReducer } from './agenciesReducer';
import { categoriesReducer } from './categoriesReducer';
import { pricesReducer } from  './pricesReducer';
export default combineReducers({
  agencies: agenciesReducer,
  categories: categoriesReducer,
  prices: pricesReducer
})
