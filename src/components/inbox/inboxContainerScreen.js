import React, { Component } from 'react'
import NewConsultationList from './src/components/Consultation/NewConsultationList'
import CompletedConsultationList from './src/components/Consultation/CompletedConsultationList'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

class InboxContainerScreen extends Component {
    state = {
        list: 'New',
        type: 'Consultation',
    }
    render() {
        const newConsultationList = (
            <NewConsultationList  type={this.state.type} />
        )
        const completedConsultationList = (
            <CompletedConsultationList type={this.state.type} />
        )  

        return (
            <View style={styles.rootView}>
                {this.state.list === 'New' ? newConsultationList : completedConsultationList}  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootView: {
      flex: 1,
      backgroundColor: "red"
    }
});

export default InboxContainerScreen;