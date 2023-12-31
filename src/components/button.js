import React, { memo } from 'react'
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    ViewStyle
} from 'react-native'

// Styles
import styles from './Styles/BButtonStyles'



const BButton = (props) => {
    const { content, buttonStyle, isLoading, onPressButton, textStyle, disable } =
        props
    return (
        <TouchableOpacity
            style={[styles.container, buttonStyle]}
            onPress={onPressButton}
            disabled={disable}
        >
            {isLoading ? (
                <ActivityIndicator
                    size='small'
                    color={styles.activityIndicator.color}
                />
            ) : (
                <Text style={[styles.content, textStyle]}>
                    {content?.toUpperCase()}
                </Text>
            )}
        </TouchableOpacity>
    )
}

export default memo(BButton)