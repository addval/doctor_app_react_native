import React, { Component } from 'react'
import ConsultationList from './ConsultationList'
import ConsultationOption from './ConsultationOption'
import {
    View, 
    StyleSheet
} from 'react-native'

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

    render() {
        return (
            <View style={styles.container}>
                <ConsultationList 
                    list={'Completed'}
                    source={this.state.type === 'Completed' ? this.props.arrCompletedConsultations : this.props.arrDeclinedConsultations}
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
    consultationType: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    consultationOption: {
        flex: 1,
    }
})