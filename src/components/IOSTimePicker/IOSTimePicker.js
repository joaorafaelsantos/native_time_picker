import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Modal, TouchableWithoutFeedback, View, DatePickerIOS } from 'react-native';
import { IOSLabel } from '../IOSLabel/index';
import { HorizontalRule } from '../HorizontalRule/index';
import { IOSButton } from '../IOSButton/index';
import { styles } from './styles';


const IOSTimePicker = ({ date, open, onPress, onTimeChange }) => {
  return (
    <Fragment>
      {/* TimePicker button */}
      <IOSButton
        title="Open TimePicker"
        accessibilityLabel="Open the native time picker on your iOS platform"
        onPress={onPress}
      />

      {/* Modal */}
      <Modal transparent={true}
        visible={open}
        onRequestClose={onPress}>
        <TouchableWithoutFeedback onPress={onPress}>

          {/* Modal container */}
          <View style={styles.modalContainer}>

            {/* Content container */}
            <View style={styles.contentContainer}>

              {/* Pick a time label */}
              <IOSLabel text="Pick a time" />

              <HorizontalRule />

              {/* iOS TimePicker */}
              <DatePickerIOS
                date={date}
                onDateChange={onTimeChange}
                mode="time">
              </DatePickerIOS>

              <HorizontalRule />

              {/* Confirm button */}
              <IOSButton
                title="Confirm"
                accessibilityLabel="Confirm time"
                onPress={onPress}
              />

              {/* Cancel button */}
              <View style={styles.cancelContainer}>
                <IOSButton
                  title="Cancel"
                  accessibilityLabel="Cancel"
                  onPress={onPress}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Fragment>
  );
}

IOSTimePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  open: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired
}

IOSTimePicker.defaultProps = {
  date: new Date(),
  open: true,
  onPress: () => alert('Button pressed!'),
  onTimeChange: () => alert('Time changed!')
}

export default IOSTimePicker;


