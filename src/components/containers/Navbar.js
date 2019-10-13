import React from 'react';
import { useSelector } from 'react-redux';
import Icon from '../Icon';
import RefreshIcon from '../../icons/refresh.png';
import PlayIcon from '../../icons/play.png';
import SettingsIcon from '../../icons/settings.png';
import ViewIcon from '../../icons/view.png';
import PropTypes from 'prop-types';

const Navbar = props => {
  const {
    imageWidth,
    imageHeight,
    numberOfRows,
    numberOfColumns
  } = useSelector(state => state.settings);
  const { imageURL } = useSelector(state => state.imageURL);
  const { gameStarted } = useSelector(state => state.startGame);
  const { gameOver } = useSelector(state => state.gameOver);

  return (
    <div className='navbar'>
      <Icon
        enabled={!gameStarted}
        src={RefreshIcon}
        title='New image'
        click={!gameStarted ? props.onFetchImage : undefined}
      />
      <Icon
        enabled={!gameStarted}
        src={SettingsIcon}
        title='Settings'
        click={!gameStarted ? () => props.onShowSettings(true) : undefined}
      />
      <Icon
        enabled={!gameStarted}
        src={PlayIcon}
        title='Start'
        click={
          !gameStarted
            ? () =>
                props.onStartGame(
                  imageURL,
                  imageWidth,
                  imageHeight,
                  numberOfRows,
                  numberOfColumns
                )
            : undefined
        }
      />
      <Icon
        enabled={!gameOver}
        src={ViewIcon}
        title='View'
        click={!gameOver ? () => props.onShowImage(true) : undefined}
      />
    </div>
  );
};

Navbar.propTypes = {
  onFetchImage: PropTypes.func,
  onShowSettings: PropTypes.func,
  onStartGame: PropTypes.func,
  onShowImage: PropTypes.func
};

export default Navbar;
