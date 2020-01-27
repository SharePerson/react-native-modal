import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReactNativeModalsScreen extends Component {
    render() {
        return (
            <View style={styles.screenContainer}>
                <Text>This is ReactNativeModalsScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {flex: 1}
});