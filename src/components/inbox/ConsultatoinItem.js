import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native'

export default class ConsultationItem extends Component {

    render() {
        const { title } = this.props
        const { icon } = this.props
        return(
            <View>
                <Image
                    source={icon}
                    style={styles.image} 
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}

ConsultationItem.propTypes = {
    source: PropTypes.string
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        resizeMode: Image.resizeMode.contain,
        alignSelf: 'center'
    },
    text: {
        padding: 5
    }
})