import React, { Component } from 'react'
import {
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native'

export default class ConsultationItem extends Component {

    render() {
        const { title, source } = this.props
        
        return(
            <View>
                <Image source={}/>
                <Text>{title}</Text>
            </View>
        );
    }
}