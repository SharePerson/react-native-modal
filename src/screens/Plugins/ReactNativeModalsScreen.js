import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal, { ModalContent } from 'react-native-modals'; 
import SlideAnimation from 'react-native-modals/dist/animations/SlideAnimation';

export default class ReactNativeModalsScreen extends Component {
    state = { modalVisible: false };

    render() {
        return (
            <View style={styles.screenContainer}>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software
                   like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Button 
                    onPress={() => this.setState({ ...this.state, modalVisible: true })}
                    title="Show Modal"
                />
                <Modal
                    visible={this.state.modalVisible}
                    onTouchOutside={() => this.setState({...this.state, modalVisible: false})}
                    swipeDirection={['left', 'right']}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom'
                    })}
                    onSwipeOut={() => {
                        this.setState({...this.state, modalVisible: false });
                    }}
                >
                    <ModalContent>
                        <Text>This is the content inside the modal box...</Text>
                    </ModalContent>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {flex: 1}
});