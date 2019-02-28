import React, { Component } from 'react';
import { View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen/index';
import { styles } from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}
