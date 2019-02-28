import React, { Component } from 'react';
import { TimePickerAndroid } from 'react-native';
import AndroidTimePicker from './AndroidTimePicker';

export default class AndroidTimePickerContainer extends Component {
  constructor(props) {
    super(props);
  }

  openPicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: this.props.hour,
        minute: this.props.minute,
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.props.onTimeChange(hour, minute)
      }
    } catch ({ code, message }) {
      alert('Cannot open time picker');
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    return (
      <AndroidTimePicker onPress={this.openPicker} />
    );
  }
}


