import { combineReducers } from 'redux';
import imageURL from './fetchImageReducer';
import settings from './settingsReducer';
import startGame from './startGameReducer';
import diaplayElements from './displayElementsReducer';
import counter from './counterReducer';
import gameOver from './gameOverReducer';

const rootReducer = combineReducers({
  imageURL,
  settings,
  startGame,
  diaplayElements,
  counter,
  gameOver
});

export default rootReducer;
