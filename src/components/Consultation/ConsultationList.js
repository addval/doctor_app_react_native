import React, { Component } from 'react'
import NewConsultationList from './NewConsultationList'
import CompletedConsultationList from './CompletedConsultationList'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

export default class ConsultationList extends Component {
    state = {
        list: 'New',
        type: 'Consultation',
    }
    // componentWillMount() {
    //     const {list, type} = this.props
    //     this.setState({
    //         list, type 
    //     })
    // }

    render() {
        const newConsultationList = (
            <NewConsultationList  type={this.state.type} />
        )
        const completedConsultationList = (
            <CompletedConsultationList type={this.state.type} />
        )  
        
        return (
            <View style={styles.container}>
              {this.state.list === 'New' ? newConsultationList : completedConsultationList}  
            </View>
        );
    }
}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
    },
})
