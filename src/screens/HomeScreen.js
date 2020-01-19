import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Jonathan Fady Soliman...</Text>
        <Text>His new name is: "Ajwaja"</Text>
        <Text>He loves lots of orange juices</Text>
        <Text>I want my dad to get me lots of toys</Text>
      </View>
    );
  }
}