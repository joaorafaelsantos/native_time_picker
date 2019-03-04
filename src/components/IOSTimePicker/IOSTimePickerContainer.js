import React, { Component } from 'react';
import IOSTimePicker from './IOSTimePicker';

export default class IOSTimePickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      date: new Date()
    }
    this.openPicker = this.openPicker.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    this.setInitialDate()
  }

  setInitialDate() {
    let date = new Date();
    date.setHours(this.props.hour, this.props.minute, 0, 0)
    this.setState({
      date
    })
  }

  openPicker() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  setDate(newDate) {
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    this.setState({ date: newDate });
    this.props.onTimeChange(hour, minute)
  }

  render() {
    return (
      <IOSTimePicker
        date={this.state.date}
        open={this.state.isOpen}
        onPress={this.openPicker}
        onTimeChange={this.setDate} />
    );
  }
}


