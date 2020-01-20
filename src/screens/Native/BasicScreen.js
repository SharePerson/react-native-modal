import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CustomModal from '../../components/CustomModal';

export default class BasicScreen extends Component {
    state = { modalVisible: false };
    render() {
        const { navigation } = this.props;
        const transparent = navigation.getParam('transparent', false);
        const bottomHalf = navigation.getParam('bottomHalf', false);
        const closeOnClickOutside = navigation.getParam('closeOnClickOutside', false);

        return(
            <View style={styles.mainContainer}>
                <View style={styles.mainContainer}>
                    <Text>Click the button to show modal: </Text>
                    <Button 
                        title="Show Modal"
                        onPress={() => this.setState({ modalVisible: true })}
                    />
                </View>
                <CustomModal
                    animation="slide"
                    visible={this.state.modalVisible}
                    mode="overFullScreen"
                    boxBackgroundColor="lightyellow"
                    transparentContainer={transparent}
                    bottomHalf={bottomHalf}
                    outsideClick={() => {
                        if(closeOnClickOutside) {
                            this.setState({ modalVisible: false });
                        }
                    }}
                >
                    <Text>This is an extended modal content to show how far the modal content will wrap the text inside</Text>
                    <Button 
                        title="Close Modal"
                        onPress={() => this.setState({ modalVisible: false })}
                    />
                </CustomModal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 }
});