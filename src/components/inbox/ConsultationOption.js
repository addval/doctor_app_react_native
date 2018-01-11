import React, { Component } from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class ConsultationOption extends Component {
    render() {
        const { title, selected } = this.props

        return(
            <TouchableOpacity 
            style={[styles.container, selected && styles.selectedContainer]} 
            activeOpacity={0.7}
            onPress={this.props.onTapOption}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    selectedContainer: {
        backgroundColor: 'skyblue'
    },
    text: {
        fontSize: 18,
    },
})