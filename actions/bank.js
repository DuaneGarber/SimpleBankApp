import * as types from '../constants/ActionTypes';

export function covert (currency, amount) {
  return {type: types.CONVERT, currency, amount};
}

export function getRate (from, to) {
  return {type: types.GET_RATE, from, to};
}
