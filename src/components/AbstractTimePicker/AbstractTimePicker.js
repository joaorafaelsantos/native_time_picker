import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Text } from 'react-native';
import { styles } from './styles';

const AbstractTimePicker = ({ platform, timePicker, hour, minute }) => {
  const TimePicker = timePicker
  return (
    <Fragment>
      <Text style={styles.text}>{platform}</Text>
      <TimePicker />
      <Text style={styles.text}>{hour}:{minute}</Text>
    </Fragment>
  );
}

AbstractTimePicker.propTypes = {
  platform: PropTypes.string.isRequired,
  timePicker: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired
}

AbstractTimePicker.defaultProps = {
  platform: 'iOS 12.1',
  timePicker: null,
  hour: 10,
  minute: 30
}

export default AbstractTimePicker;


