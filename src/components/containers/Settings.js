import React from 'react';
import Slider from '../Slider';
import PropTypes from 'prop-types';

const Settings = props => {
  return (
    <div className='sliders_container'>
      <Slider
        title='Rows'
        getValue={e => props.onSettingsChange('rows', e.target.value)}
        defaultValue={props.rows}
      />
      <Slider
        title='Columns'
        getValue={e => props.onSettingsChange('columns', e.target.value)}
        defaultValue={props.columns}
      />
      <button className='btn' onClick={() => props.onShowSettings(false)}>
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
