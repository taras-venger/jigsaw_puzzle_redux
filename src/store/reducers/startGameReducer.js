import * as actionTypes from '../actions/actionTypes';

const startGameReducer = (state = { gameStarted: false }, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        gameStarted: true,
        pieces: [...action.pieces]
      };
    default:
      return state;
  }
};

export default startGameReducer;
