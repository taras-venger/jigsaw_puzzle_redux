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
      gameOver
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

const mapStateToProps = state => {
  const {
    imageWidth,
    imageHeight,
    numberOfRows,
    numberOfColumns
  } = state.settings;
  const { showImage, showSettings } = state.diaplayElements;
  const { pieces, gameStarted } = state.startGame;
  const { imageURL, isFetching } = state.imageURL;
  const { gameOver } = state.gameOver;
  const { counter } = state.counter;
  return {
    imageURL,
    isFetching,
    pieces,
    gameStarted,
    imageWidth,
    imageHeight,
    numberOfRows,
    numberOfColumns,
    showSettings,
    showImage,
    counter,
    gameOver
  };
};

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
