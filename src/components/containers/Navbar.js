import React from 'react';
import Icon from '../Icon';
import RefreshIcon from '../../icons/refresh.png';
import PlayIcon from '../../icons/play.png';
import SettingsIcon from '../../icons/settings.png';
import ViewIcon from '../../icons/view.png';
import PropTypes from 'prop-types';
import { getPieces } from '../../store/utility/getPieces';

const Navbar = props => {
  const {
    imageURL,
    imageWidth,
    imageHeight,
    numberOfRows,
    numberOfColumns,
    gameStarted,
    gameOver,
    onFetchImage,
    onShowSettings,
    onStartGame,
    onShowImage
  } = props;

  const handleGameStart = async () => {
    const pieces = await getPieces(
      imageURL,
      imageWidth,
      imageHeight,
      numberOfRows,
      numberOfColumns
    );
    onStartGame(pieces);
  };

  return (
    <div className='navbar'>
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
        click={!gameStarted ? handleGameStart : undefined}
      />
      <Icon
        enabled={!gameOver}
        src={ViewIcon}
        title='View'
        click={!gameOver ? () => onShowImage(true) : undefined}
      />
    </div>
  );
};

Navbar.propTypes = {
  imageURL: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  numberOfRows: PropTypes.number,
  numberOfColumns: PropTypes.number,
  gameStarted: PropTypes.bool,
  gameOver: PropTypes.bool,
  onFetchImage: PropTypes.func,
  onShowSettings: PropTypes.func,
  onStartGame: PropTypes.func,
  onShowImage: PropTypes.func
};

export default Navbar;
