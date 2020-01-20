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
                <Button 
                    onPress={() => this.props.navigation.navigate('Basic', { transparent: true })}
                    title="Transparent Container"
                />
                <Button 
                    onPress={() => this.props.navigation.navigate('Basic', { 
                        bottomHalf: true,
                        transparent: true
                        })}
                    title="Bottom Half"
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