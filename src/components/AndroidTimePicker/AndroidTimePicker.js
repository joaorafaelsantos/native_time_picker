import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-native';

const AndroidTimePicker = ({ onPress }) => {
  return (
    <Fragment>
        <Button
          onPress={onPress}
          title="Open TimePicker"
          accessibilityLabel="Open the native time picker on your Android platform"
        />
      </Fragment>
  );
}

AndroidTimePicker.propTypes = {
  onPress: PropTypes.func.isRequired
}

AndroidTimePicker.defaultProps = {
  onPress: () => alert('Button pressed!')
}

export default AndroidTimePicker;


