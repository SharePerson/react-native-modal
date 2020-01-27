import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
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
        <Button 
            onPress={() => this.props.navigation.navigate('Basic', { 
                bottomHalf: true,
                transparent: true,
                closeOnClickOutside: true
                })}
            title="Close on Click Outside"
        />
        <Button 
            onPress={() => this.props.navigation.navigate('RNM')}
            title="React Native Modal Plugin"
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