import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button 
            onPress={() => this.props.navigation.navigate("ReactNative")}
            title="Using React Native"
        />
        <Button 
            onPress={() => this.props.navigation.navigate("Plugin")}
            title="Using react-native-modal Plugin"
        />
      </View>
    );
  }
}