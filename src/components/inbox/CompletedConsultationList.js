import React, { Component } from 'react'
import ConsultationOption from './ConsultationOption'
import {
    View, 
    Text,
    TouchableOpacity,
    SectionList,
    StyleSheet
} from 'react-native'

const sections = [
    {
      id: 0,
      title: 'DECEMBER 2017',
      data: [
        {id: 0, text: 'View'},
        {id: 1, text: 'Text'},
        {id: 2, text: 'Image'},
      ]
    },
    {
      id: 1,
      title: 'OCTOBER 2017',
      data: [
        {id: 3, text: 'ScrollView'},
        {id: 4, text: 'ListView'},
      ]
    }
  ]
  
const extractKey = ({id}) => id

export default class CompletedConsultationList extends Component {
    state = {}

    componentWillMount() {
        const { type } = this.props
        this.setState({ type })
    }

    onTapCompleted = () => {
        this.setState({
            type: 'Completed'
        })
    }

    onTapDecline = () => {
        this.setState({
            type: 'Decline'
        })
    }

    renderItem = ({item}) => {
        const { type } = this.state
        return (
          <Text style={styles.row}>
            {type === 'Completed' ? 'Completed Consultations' : 'Declined Consultations'}
          </Text>
        )
      }
      
    renderSectionHeader = ({section}) => {
        return (
          <Text style={styles.header}>
            {section.title}
          </Text>
        )
      }

    render() {
        return (
            <View style={styles.container}>
                <SectionList 
                    style={[styles.list, (this.state.type !== 'Consultations') && styles.selectedList]}
                    sections={sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={extractKey}
                />
                <View style={styles.consultationType}>
                    <ConsultationOption
                        style={styles.consultationOption}
                        title={'Decline'}
                        onTapOption={this.onTapDecline}
                        selected={this.state.type !== 'Completed'?true:false}
                    />
                    <ConsultationOption 
                        style={styles.consultationOption}
                        title={'Completed'}
                        onTapOption={this.onTapCompleted}
                        selected={this.state.type === 'Completed'?true:false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: 'rgb(234, 248, 254)'
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    selectedList: {
        backgroundColor: 'white',
    },
    row: {
        padding: 15,
        marginBottom: 1,
        backgroundColor: 'skyblue',
      },
      header: {
        padding: 15,
        backgroundColor: 'lightgray',
        color: 'rgb(35, 42, 55)',
        fontWeight: 'bold',
      },    
    consultationType: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    consultationOption: {
        flex: 1,
    }
})