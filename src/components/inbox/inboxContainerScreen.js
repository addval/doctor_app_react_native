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

const sections = [
    {
      id: 0,
      title: 'DECEMBER 2017',
      data: [
        {id: 0, text: 'Video Consultations'},
        {id: 1, text: 'Video Consultations'},
      ]
    },
    {
      id: 1,
      title: 'OCTOBER 2017',
      data: [
        {id: 3, text: 'Video Consultations'},
        {id: 4, text: 'Video Consultations'},
      ]
    }
  ]

class InboxContainerScreen extends Component {
    state = { 
        arrNewVideoConsultations: [
            {
              id: 0,
              title: 'DECEMBER 2017',
              data: [
                {id: 0, text: 'Video Consultations'},
                {id: 1, text: 'Video Consultations'},
                {id: 2, text: 'Video Consultations'},
              ]
            },
            {
              id: 1,
              title: 'OCTOBER 2017',
              data: [
                {id: 3, text: 'Video Consultations'},
                {id: 4, text: 'Video Consultations'},
              ]
            }
          ],
        arrNewSecondOpiniouns: [
            {
              id: 0,
              title: 'DECEMBER 2017',
              data: [
                {id: 0, text: 'Second Opinion'},
                {id: 1, text: 'Second Opinion'},
              ]
            },
            {
              id: 1,
              title: 'OCTOBER 2017',
              data: [
                {id: 3, text: 'Second Opinion'},
                {id: 4, text: 'Second Opinion'},
              ]
            }
          ],
        arrCompletedConsultations: sections,
        arrDeclinedConsultations: sections
    }

    componentWillMount() {
        const { list, type } = this.props.navigation.state.params
        this.setState({
            ...this.state,
            type, 
            list
        })
    }

    onTapNew = () => {
        this.setState({
            ...this.state,
            list: 'New',
            type: 'Consultations'
        })
    }

    onTapCompleted = () => {
        this.setState({
            ...this.state,
            list: 'Completed',
            type: 'Completed'
        })
    }

    render() {
        
        const newConsultationList = (
            <NewConsultationList 
                type={this.state.type}
                arrNewVideoConsultations={this.state.arrNewVideoConsultations}
                arrNewSecondOpiniouns={this.state.arrNewSecondOpiniouns}
            />
        )
        
        const completedConsultationList = (
            <CompletedConsultationList 
                type={this.state.type}
                arrCompletedConsultations={this.state.arrCompletedConsultations}
                arrDeclinedConsultations={this.state.arrDeclinedConsultations}
            />
        )  

        return (
            <View style={styles.rootView}>
                <View style={styles.itemContainer}>
                    <ConsultationItem 
                        style={styles.consultationItem}
                        title={'New'}
                        item={require('../../assets/NewCasePlusIcon.png')} 
                        onTapItem={this.onTapNew}
                        selected={this.state.list === 'New'} 
                    />
                    <ConsultationItem 
                        style={styles.consultationItem}
                        title={'Completed'}
                        item={require('../../assets/NewCaseTickMarkIcon.png')}
                        onTapItem={this.onTapCompleted}
                        selected={this.state.list !== 'New'} 
                    />
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