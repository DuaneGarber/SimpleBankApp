import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import bank from './bank';

const rootReducer = combineReducers({
  routing: routeReducer,
  bank
});

export default rootReducer;
