import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';

export default class CustomModal extends Component {
    render() {
        const styles = StyleSheetFactory.getSheet(this.props.boxBackgroundColor);
        return (
            <Modal 
                animationType={this.props.animation}
                transparent={this.props.transparentContainer}
                visible={this.props.visible}
                presentationStyle={this.props.mode}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.modalContainer}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        );
    }
}

class StyleSheetFactory {
    static getSheet(boxBgColor) {
        return StyleSheet.create({
            modalWrapper: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent'
            },
            modalContainer: {  
                backgroundColor: boxBgColor,
                borderWidth: 1,
                borderColor: 'lightgray',
                borderStyle: 'solid',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                marginHorizontal: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1
            }
        })
    }
}

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    modalContainer: {  
        backgroundColor: 'lightyellow',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    }
});