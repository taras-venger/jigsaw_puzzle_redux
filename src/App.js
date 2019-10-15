import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from './components/Board';
import Image from './components/Image';
import Frame from './components/Frame';
import Navbar from './components/containers/Navbar';
import Backdrop from './components/Backdrop';
import Settings from './components/containers/Settings';
import Spinner from './components/Spinner';
import * as action from './store/actions/actionCreators';
import * as selector from './store/selectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchImage();
  }

  componentDidUpdate() {
    const {
      onGameOverCheck,
      numberOfRows,
      numberOfColumns,
      counter,
      gameOver,
      error
    } = this.props;

    onGameOverCheck(numberOfRows * numberOfColumns, counter);
    setTimeout(() => gameOver && alert('Well done!'), 0);
  }

  render() {
    const {
      imageURL,
      isFetching,
      pieces,
      gameStarted,
      gameOver,
      imageWidth,
      imageHeight,
      numberOfRows,
      numberOfColumns,
      showSettings,
      showImage,
      onFetchImage,
      onShowSettings,
      onStartGame,
      onShowImage,
      onSettingsChange
    } = this.props;

    return (
      <div className='App'>
        <div className='container'>
          <Board>
            <Navbar
              imageURL={imageURL}
              gameStarted={gameStarted}
              gameOver={gameOver}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              numberOfRows={numberOfRows}
              numberOfColumns={numberOfColumns}
              onFetchImage={onFetchImage}
              onStartGame={onStartGame}
              onShowSettings={onShowSettings}
              onShowImage={onShowImage}
            />
            <Image
              url={imageURL}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              hideImage={gameStarted}
            />
            {isFetching && (
              <Backdrop>
                <Spinner />
              </Backdrop>
            )}
            {pieces}
          </Board>
          <Frame
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            rows={numberOfRows}
            columns={numberOfColumns}
          />
          {showImage && (
            <Backdrop click={() => onShowImage(false)}>
              <Image
                url={imageURL}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
              />
            </Backdrop>
          )}
          {showSettings && (
            <Settings
              onSettingsChange={onSettingsChange}
              onShowSettings={onShowSettings}
              rows={numberOfRows}
              columns={numberOfColumns}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imageURL: selector.imageURL(state),
  isFetching: selector.isFetching(state),
  pieces: selector.pieces(state),
  error: selector.error(state),
  gameStarted: selector.gameStarted(state),
  imageWidth: selector.width(state),
  imageHeight: selector.height(state),
  numberOfRows: selector.rows(state),
  numberOfColumns: selector.columns(state),
  showSettings: selector.showSettings(state),
  showImage: selector.showImage(state),
  counter: selector.counter(state),
  gameOver: selector.gameOver(state)
});

const mapDispatchToProps = {
  onFetchImage: action.fetchImage,
  onShowSettings: action.showSettings,
  onShowImage: action.showImage,
  onSettingsChange: action.setRowsAndColumns,
  onStartGame: action.startGame,
  onGameOverCheck: action.checkGameOver
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
