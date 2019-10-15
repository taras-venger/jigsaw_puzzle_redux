import React from 'react';
import Slider from '../Slider';
import PropTypes from 'prop-types';

const Settings = props => {
  const { rows, columns, onShowSettings, onSettingsChange } = props;
  return (
    <div className='sliders_container'>
      <Slider
        title='Rows'
        getValue={e => onSettingsChange('rows', e.target.value)}
        defaultValue={rows}
      />
      <Slider
        title='Columns'
        getValue={e => onSettingsChange('columns', e.target.value)}
        defaultValue={columns}
      />
      <button className='btn' onClick={() => onShowSettings(false)}>
        OK
      </button>
    </div>
  );
};

Settings.propTypes = {
  onSettingsChange: PropTypes.func,
  onShowSettings: PropTypes.func,
  rows: PropTypes.number,
  columns: PropTypes.number
};

export default Settings;
