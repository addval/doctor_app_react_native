import React, { Component } from 'react'
import {
    View, 
    Text
} from 'react-native'

export default class NewConsultationList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30}}>New Cosultation</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgrondColor: 'red',
    },
})