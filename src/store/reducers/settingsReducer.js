import * as actionTypes from '../actions/actionTypes';
import { adjustSize } from '../utility/otherUtils';
// Since setting up canvas size rounds down calculated pieces' width & height,
// initial img size must be racalculated in order to eliminate the difference
// between the image and pieces' size:

const initialState = {
  imageWidth: 880,
  imageHeight: 620,
  numberOfRows: 5,
  numberOfColumns: 5
};

const settingsReducer = (state = initialState, action) => {
  const value = parseInt(action.value);
  const { imageHeight, imageWidth } = initialState;

  switch (action.type) {
    case actionTypes.SET_NUMBER_OF_ROWS:
      return {
        ...state,
        numberOfRows: value,
        imageHeight: adjustSize(imageHeight, value)
      };
    case actionTypes.SET_NUMBER_OF_COLUMNS:
      return {
        ...state,
        numberOfColumns: value,
        imageWidth: adjustSize(imageWidth, value)
      };
    default:
      return state;
  }
};

export default settingsReducer;
