import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-native';

const IOSButton = ({ title, accessibilityLabel, onPress }) => (
        <Button
            title={title}
            accessibilityLabel={accessibilityLabel}
            onPress={onPress}
            color="#007aff"
        />
)

PropTypes.propTypes = {
    title: PropTypes.string.isRequired,
    accessibilityLabel: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

PropTypes.defaultProps = {
    title: 'iOS Button',
    accessibilityLabel: 'iOS Accessibility Label',
    onPress: () => { alert('iOS Button Pressed!') }
}

export default IOSButton;
