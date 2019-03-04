import React from 'react';
import PropTypes from 'prop-types'
import { Text } from 'react-native';
import { styles } from './styles';

const IOSLabel = ({text}) => (
    <Text style={styles.label}>{text}</Text>
)

PropTypes.propTypes = {
    text: PropTypes.string.isRequired
  }
  
  PropTypes.defaultProps = {
    text: 'iOS Label'
  }
  
  export default IOSLabel;
  