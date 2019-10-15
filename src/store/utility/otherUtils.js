export const adjustSize = (initialSize, numberOfPieces) =>
  Math.floor(initialSize / numberOfPieces) * numberOfPieces;

export const checkImgLoadError = value => {
  value && alert('An error occured. Please check your network connection');
};
