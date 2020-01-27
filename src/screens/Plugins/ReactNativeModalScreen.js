import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from "react-native-modal";

export default class ReactNativeModalScreen extends Component {
    state = { modalVisible: false, coverScreen: true };

    render() {
        return (
            <View style={styles.screenContainer}>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software
                   like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button 
                    onPress={() => this.setState({ 
                        ...this.state, 
                        modalVisible: true,
                        coverScreen: true
                    })} 
                    title="Show Modal: Full Screen"
                />
                <Button 
                    onPress={() => this.setState({ 
                        ...this.state, 
                        modalVisible: true,
                        coverScreen: false
                    })} 
                    title="Show Modal: Not Full Screen"
                />
                <Modal 
                    isVisible={this.state.modalVisible}
                    style={styles.modal}
                    coverScreen={this.state.coverScreen}
                    onBackdropPress={() => this.setState({ 
                        ...this.state, 
                        modalVisible: false
                    })}
                    onSwipeComplete={() => this.setState({ 
                        ...this.state, 
                        modalVisible: false
                    })}
                    swipeDirection="left"
                >
                    <View style={styles.modalInnerContainer}>
                        <Text>I am the modal content!</Text>
                        <Button 
                            onPress={() => this.setState({ 
                                ...this.state, 
                                modalVisible: false
                            })} 
                            title="Close Modal"
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: { flex: 1 },
    modalInnerContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15
    } 
});