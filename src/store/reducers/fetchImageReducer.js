import * as actionTypes from '../actions/actionTypes';

const initialState = {
  imageURL: '',
  isFetching: true
};

const fetchImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGE_START:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_IMAGE_SUCCESS:
      return {
        imageURL: action.imageURL,
        isFetching: false
      };
    default:
      return state;
  }
};

export default fetchImageReducer;
