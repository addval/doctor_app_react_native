import React, { Component } from 'react'
import ConsultationOption from './ConsultationOption'
import {
    View, 
    Text,
    SectionList,
    StyleSheet,
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
  
export default class NewConsultationList extends Component {
    state = {}

    componentWillMount() {
        const { type } = this.props
        this.setState({ type })
    }

    onTapConsultation = () => {
        this.setState({
            type: 'Consultations'
        })
    }

    onTapSecondOpinion = () => {
        this.setState({
            type: 'Second Opinion'
        })
    }

    renderItem = ({item}) => {
        const { type } = this.state
        console.log('Current type : ' + type)
        return (
          <Text style={styles.row}>
            {type === 'Consultations' ? 'Video Consultations' : 'Second Opinions'}
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
        console.log('render method executed')
        const { type } = this.state

        return (
            <View style={styles.container}>
                <SectionList 
                    style={[styles.list, (type !== 'Consultations') && styles.selected]}
                    sections={sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={extractKey}
                />
                <View style={styles.consultationType}>
                    <ConsultationOption
                        style={styles.consultationOption}
                        title={'Second Opinion'}
                        onTapOption={this.onTapSecondOpinion}
                        selected={this.state.type !== 'Consultations'?true:false}
                    />
                    <ConsultationOption 
                        style={styles.consultationOption}
                        title={'Video Consultations'}
                        onTapOption={this.onTapConsultation}
                        selected={this.state.type === 'Consultations'?true:false}
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
        backgroundColor: 'rgb(234, 248, 253)'
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
    },
    selectedList: {
        backgroundColor: 'skyblue',
    },
    consultationType: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white'
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
    consultationOption: {
        flex: 1,
    }
})