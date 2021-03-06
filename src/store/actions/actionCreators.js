import * as actionTypes from './actionTypes';
import api from '../../api';

const fetchImageStart = () => ({
  type: actionTypes.FETCH_IMAGE_START
});

const fetchImageSuccess = imageURL => ({
  type: actionTypes.FETCH_IMAGE_SUCCESS,
  imageURL
});

const fetchImageFail = () => ({
  type: actionTypes.FETCH_IMAGE_FAIL
});

export const fetchImage = () => async dispatch => {
  dispatch(fetchImageStart());
  try {
    const imageURL = await api.getRandomImage();
    dispatch(fetchImageSuccess(imageURL));
  } catch {
    dispatch(fetchImageFail());
  }
};

export const startGame = pieces => ({
  type: actionTypes.START_GAME,
  pieces
});

export const showSettings = value =>
  value
    ? { type: actionTypes.SHOW_SETTINGS }
    : { type: actionTypes.HIDE_SETTINGS };

export const setRowsAndColumns = (dimension, value) =>
  dimension === 'rows'
    ? { type: actionTypes.SET_NUMBER_OF_ROWS, value }
    : { type: actionTypes.SET_NUMBER_OF_COLUMNS, value };

export const showImage = value =>
  value ? { type: actionTypes.SHOW_IMAGE } : { type: actionTypes.HIDE_IMAGE };

export const incrementCounter = () => ({
  type: actionTypes.INCREMENT_COUNTER
});

export const checkGameOver = (pieces, matches) => ({
  type: actionTypes.CHECK_GAME_OVER,
  numberOfPieces: pieces,
  numberOfMatches: matches
});
