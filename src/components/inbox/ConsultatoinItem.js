import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View, 
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class ConsultationItem extends Component {

    render() {
        const { title, item, selected } = this.props

        return (
            <TouchableOpacity style={styles.item} 
            activeOpacity={0.7}
            onPress={this.props.onTapItem}>
                <Image
                    source={item}
                    style={[styles.image, selected && styles.selectedImage]} 
                />
                <Text style={[styles.text, selected && styles.selectedText]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: Image.resizeMode.contain,
        alignSelf: 'center',
        marginVertical: 10
    },
    selectedImage: {
        opacity: 0.5
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 10,
    },
    selectedText: {
        fontWeight: 'bold',
    },
})