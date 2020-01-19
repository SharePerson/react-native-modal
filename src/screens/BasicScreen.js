import React, { Component } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

export default class BasicScreen extends Component {
    state = { modalVisible: false };
    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.mainContainer}>
                    <Text>Click the button to show modal: </Text>
                    <Button 
                        title="Show Modal"
                        onPress={() => this.setState({ modalVisible: true })}
                    />
                </View>
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    presentationStyle="overFullScreen"
                >
                    <View style={styles.modalWrapper}>
                        <View style={styles.modalContainer}>
                            <Text>This is an extended modal content to show how far the modal content will wrap the text inside</Text>
                            <Button 
                                title="Close Modal"
                                onPress={() => this.setState({ modalVisible: false })}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    modalContainer: {  
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10
    }
});