export const imageURL = state => state.imageURL.imageURL;
export const isFetching = state => state.imageURL.isFetching;
export const error = state => state.imageURL.error;

export const height = state => state.settings.imageHeight;
export const width = state => state.settings.imageWidth;
export const rows = state => state.settings.numberOfRows;
export const columns = state => state.settings.numberOfColumns;

export const gameStarted = state => state.startGame.gameStarted;
export const pieces = state => state.startGame.pieces;

export const showImage = state => state.diaplayElements.showImage;
export const showSettings = state => state.diaplayElements.showSettings;

export const gameOver = state => state.gameOver.gameOver;
export const counter = state => state.counter.counter;
