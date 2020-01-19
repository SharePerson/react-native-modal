import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button 
            onPress={() => this.props.navigation.navigate("Basic")}
            title="Basic Usage"
        />
        <Text>His new name is: "Ajwaja"</Text>
        <Text>He loves lots of orange juices</Text>
        <Text>I want my dad to get me lots of toys</Text>
      </View>
    );
  }
}