import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from './components/Board';
import Image from './components/Image';
import Frame from './components/Frame';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SlidersContainer from './components/SlidersContainer';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import Icon from './components/Icon';
import RefreshIcon from './icons/refresh.png';
import PlayIcon from './icons/play.png';
import SettingsIcon from './icons/settings.png';
import ViewIcon from './icons/view.png';
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
      gameOver,

      onFetchImage,
      onShowSettings,
      onShowImage,
      onSettingsChange
    } = this.props;

    const onStartGame = () =>
      this.props.onStartGame.call(
        this,
        imageURL,
        imageWidth,
        imageHeight,
        numberOfRows,
        numberOfColumns
      );

    return (
      <div className='App'>
        <div className='container'>
          <Board>
            <Navbar>
              <Icon
                enabled={!gameStarted}
                src={RefreshIcon}
                title='New image'
                click={!gameStarted ? onFetchImage : undefined}
              />
              <Icon
                enabled={!gameStarted}
                src={SettingsIcon}
                title='Settings'
                click={!gameStarted ? () => onShowSettings(true) : undefined}
              />
              <Icon
                enabled={!gameStarted}
                src={PlayIcon}
                title='Start'
                click={!gameStarted ? onStartGame : undefined}
              />
              <Icon
                enabled={!gameOver}
                src={ViewIcon}
                title='View'
                click={!gameOver ? () => onShowImage(true) : undefined}
              />
            </Navbar>
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
            <SlidersContainer>
              <Slider
                title='Rows'
                getValue={e => onSettingsChange('rows', e.target.value)}
                defaultValue={numberOfRows}
              />
              <Slider
                title='Columns'
                getValue={e => onSettingsChange('columns', e.target.value)}
                defaultValue={numberOfColumns}
              />
              <button className='btn' onClick={() => onShowSettings(false)}>
                OK
              </button>
            </SlidersContainer>
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

const mapDispatchToProps = dispatch => ({
  onFetchImage: () => dispatch(action.fetchImage()),
  onShowSettings: value => dispatch(action.showSettings(value)),
  onShowImage: value => dispatch(action.showImage(value)),
  onSettingsChange: (dimension, value) =>
    dispatch(action.setRowsAndColumns(dimension, value)),
  onStartGame: (url, width, height, rows, columns) =>
    dispatch(action.startGame(url, width, height, rows, columns)),
  onGameOverCheck: (pieces, matches) =>
    dispatch(action.checkGameOver(pieces, matches))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
