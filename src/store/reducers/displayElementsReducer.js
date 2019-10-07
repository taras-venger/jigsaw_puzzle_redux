import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showSettings: false,
  showImage: false
};

const diaplayElements = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SETTINGS:
      return { ...state, showSettings: true };
    case actionTypes.HIDE_SETTINGS:
      return { ...state, showSettings: false };
    case actionTypes.SHOW_IMAGE:
      return { ...state, showImage: true };
    case actionTypes.HIDE_IMAGE:
      return { ...state, showImage: false };
    default:
      return state;
  }
};
export default diaplayElements;
