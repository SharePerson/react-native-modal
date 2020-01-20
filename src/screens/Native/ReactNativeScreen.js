import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class ReactNativeScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Button 
                    onPress={() => this.props.navigation.navigate('Basic')}
                    title="Basic Usage"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
});