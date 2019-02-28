import React from 'react';
import { View } from 'react-native';
import { AbstractTimePicker } from '../../components/AbstractTimePicker/index';
import { styles } from './styles';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.timePickerContainer}>
      <AbstractTimePicker />
    </View>
  </View>
)

export default HomeScreen