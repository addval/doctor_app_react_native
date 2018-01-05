import React, { Component } from 'react'
import NewConsultationList from './NewConsultationList'
import CompletedConsultationList from './CompletedConsultationList'
import ConsultationItem from './ConsultatoinItem'
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
            <NewConsultationList type={this.state.type} />
        )
        const completedConsultationList = (
            <CompletedConsultationList type={this.state.type} />
        )  

        return (
            <View style={styles.rootView}>
            <View style={styles.itemContainer}>
                <ConsultationItem 
                    title={'New'}
                    item={require('../../assets/NewCasePlusIcon.png')} />
                <ConsultationItem 
                    title={'Completed'}
                    item={require('../../assets/NewCaseTickMarkIcon.png')} />
                </View>
                {this.state.list === 'New' ? newConsultationList : completedConsultationList}  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootView: {
      flex: 1,
    },
    itemContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor: 'white'
    }
});

export default InboxContainerScreen;