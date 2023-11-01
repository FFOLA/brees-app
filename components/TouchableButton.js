import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const TouchableButton = ({
    title, textStyle, containerStyle, buttonStyle, internalViewBGColor, ...rest
}) => {
    return (
        <View style={[Styles.container, containerStyle]}>
            <TouchableOpacity {...rest} style={[Styles.touchableStyle, buttonStyle]}>
                <View style={[Styles.internalView, internalViewBGColor]}>
                    <Text style={[Styles.textStyle, textStyle]}> {title}</Text>
                </View>
            </TouchableOpacity >
        </View>
    )
}
export default TouchableButton;

const Styles = StyleSheet.create({
    container: {
        width: '100%', paddingHorizontal: 15, height: 50,
    },
    touchableStyle: {
        width: '100%', height: '100%', backgroundColor: '#2B14DD', borderRadius: 60
    },
    internalView: {
        width: '100%', height: '100%', backgroundColor: '#2B14DD', borderRadius: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "black",
        // textTransform: 'uppercase'
    }
});