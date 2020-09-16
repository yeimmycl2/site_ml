import { createStore, combineReducers } from 'redux';
import itemListReducer from './reducers/itemListReducer';
import loaderReducer from './reducers/loaderReducer';
import { initialState } from './storeConst';

const reducers = combineReducers({
  itemListReducer,
  loaderReducer
});

const store = createStore(reducers, initialState);

export default store;
