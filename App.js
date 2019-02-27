import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import ExampleScreen from './src/screens/ExampleScreen/ExampleScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ExampleScreen />
      </View>
    );
  }
}
