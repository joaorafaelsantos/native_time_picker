import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export default class ExampleComponent extends Component {
  render() {
    return (
      <Fragment>
        <Text style={styles.welcome}>Welcome to NativeTimePicker!</Text>
      </Fragment>
    );
  }
}


