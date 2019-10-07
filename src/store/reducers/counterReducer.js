import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      let { counter } = state;
      counter++;
      return {
        counter
      };
    default:
      return state;
  }
};

export default counterReducer;
