import React, { Component } from 'react'
import ConsultationList from './ConsultationList'
import ConsultationOption from './ConsultationOption'
import {
    View, 
    StyleSheet,
} from 'react-native'
  
export default class NewConsultationList extends Component {
    state = {}

    componentWillMount() {
        const { type } = this.props
        this.setState({ type })
    }

    onTapConsultation = () => {
        this.setState({
            type: 'Consultations',
        })
    }

    onTapSecondOpinion = () => {
        this.setState({
            type: 'Second Opinion',
        })
    }    

    render() {
        return (
            <View style={styles.container}>
                <ConsultationList 
                    list={'New'}
                    source={this.state.type === 'Consultations' ? this.props.arrNewVideoConsultations : this.props.arrNewSecondOpiniouns}
                />
                <View style={styles.consultationType}>
                    <ConsultationOption
                        style={styles.consultationOption}
                        title={'Second Opinion'}
                        onTapOption={this.onTapSecondOpinion}
                        selected={this.state.type !== 'Consultations'}
                    />
                    <ConsultationOption 
                        style={styles.consultationOption}
                        title={'Video Consultations'}
                        onTapOption={this.onTapConsultation}
                        selected={this.state.type === 'Consultations'}
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
    consultationType: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    consultationOption: {
        flex: 1,
    },
})