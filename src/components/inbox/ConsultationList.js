import React, { Component } from 'react'
import ConsultationRowItem from './ConsultationRowItem'
import {
    Text,
    SectionList,
    StyleSheet,
} from 'react-native'

const extractKey = ({id}) => id

export default class ConsultationList extends Component {
    renderItem = ({item}) => {
        return (
            <ConsultationRowItem 
                list={this.props.list} 
                item={item}
            />
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
            <SectionList 
                style={styles.list}
                sections={this.props.source}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 5,
        backgroundColor: 'lightgray',
        color: 'rgb(35, 42, 55)',
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
        backgroundColor: 'rgb(234, 248, 253)'
    },    
})

