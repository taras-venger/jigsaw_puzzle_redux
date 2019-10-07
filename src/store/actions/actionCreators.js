import axios from 'axios';
import * as actionTypes from './actionTypes';
import { loadImage, cutImage, transformPieces } from '../utility/getPieces';

export const fetchImageStart = () => ({
  type: actionTypes.FETCH_IMAGE_START
});

export const fetchImage = () => dispatch => {
  dispatch(fetchImageStart());
  axios.get(`https://source.unsplash.com/random/880x620`).then(image =>
    dispatch({
      type: actionTypes.FETCH_IMAGE_SUCCESS,
      imageURL: image.request.responseURL
    })
  );
};

export const startGame = (url, width, height, rows, columns) => dispatch => {
  loadImage(url)
    .then(img => cutImage(img, width, height, rows, columns))
    .then(pieces => transformPieces(pieces))
    .then(pieces =>
      dispatch({
        type: actionTypes.START_GAME,
        pieces
      })
    );
};

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
