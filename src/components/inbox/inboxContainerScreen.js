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
    state = { }

    componentWillMount() {
        const { list, type } = this.props.navigation.state.params
        this.setState({type, list})
    }

    onTapNew = () => {
        this.setState({
            list: 'New',
            type: 'Consultations'
        })
    }

    onTapCompleted = () => {
        this.setState({
            list: 'Completed',
            type: 'Completed'
        })
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
                    style={styles.consultationItem}
                    title={'New'}
                    item={require('../../assets/NewCasePlusIcon.png')} 
                    onTapItem={this.onTapNew}
                    selected={this.state.list === 'New'} />
                <ConsultationItem 
                    style={styles.consultationItem}
                    title={'Completed'}
                    item={require('../../assets/NewCaseTickMarkIcon.png')}
                    onTapItem={this.onTapCompleted}
                    selected={this.state.list !== 'New'} />
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
    },
    consultationItem: {
        flex: 1,
    }
});

export default InboxContainerScreen;