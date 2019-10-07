import * as actionTypes from '../actions/actionTypes';

const initialState = {
  gameOver: false
};

const gameOverReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_GAME_OVER:
      const gameOver = action.numberOfPieces === action.numberOfMatches;
      return { gameOver };
    default:
      return state;
  }
};

export default gameOverReducer;
