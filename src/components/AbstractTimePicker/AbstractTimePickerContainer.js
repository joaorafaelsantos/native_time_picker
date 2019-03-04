import React, { Component } from 'react';
import { Platform } from 'react-native';
import AbstractTimePicker from './AbstractTimePicker';
import { AndroidTimePicker } from '../AndroidTimePicker/index';
import { IOSTimePicker } from '../IOSTimePicker/index';

export default class AbstractTimePickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: null,
      timePicker: null,
      hour: 10,
      minute: 30
    }
    this.handleOnTimeChange = this.handleOnTimeChange.bind(this)
  }

  componentDidMount() {
    let platform = null;
    let TimePicker = null;

    if (Platform.OS === 'android') {
      platform = `Android ${Platform.Version}`;
      TimePicker = () => <AndroidTimePicker
        hour={this.state.hour}
        minute={this.state.minute}
        onTimeChange={this.handleOnTimeChange} />
    }
    else if (Platform.OS === 'ios') {
      platform = `iOS ${Platform.Version}`;
      TimePicker = () => <IOSTimePicker
        hour={this.state.hour}
        minute={this.state.minute}
        onTimeChange={this.handleOnTimeChange} />
    }

    this.setState({
      platform,
      timePicker: TimePicker
    })
  }

  handleOnTimeChange(hour, minute) {
    this.setState({
      hour,
      minute
    })
  }

  render() {
    if (this.state.timePicker) {
      return (
        <AbstractTimePicker
          platform={this.state.platform}
          timePicker={this.state.timePicker}
          hour={this.state.hour}
          minute={this.state.minute} />
      );
    }
    return false
  }
}