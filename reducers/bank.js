import { CONVERT, GET_RATE } from '../constants/ActionTypes';

const initialState = {
  input: {
    form: '',
    to: '',
    amount: 0,
    currency: 'USD'
  },
  output: {
    rate: 0.00,
    amount: 0,
    currency: ''
  }
};

export default function bank (state = initialState, action) {
  switch (action.type) {
    case CONVERT:
      return convert(state, action.currency, action.amount);

    case GET_RATE:
      return getRate(state, action.from, action.to);
    // case CONVERT:
    //   return [
    //     {
    //       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    //       completed: false,
    //       text: action.text
    //     },
    //     ...state
    //   ];

    // case GET_RATE:
    //   return state.filter(todo =>
    //     todo.id !== action.id
    //   );

    default:
      return state;
  }
}

function convert (state, currency, amount) {
  let resultObj = {
    result: {
      currency: 'HII',
      amount: 100.00
    }
  };

  return {...state, resultObj};
}

function getRate (state, from, to) {
  let resultObj = {
    result: {
      rate: 1000.99
    }
  };

  return {...state, resultObj};
}
