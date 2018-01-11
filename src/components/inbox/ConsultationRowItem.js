import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

export default class ConsultationRowItem extends Component {
    render() {
        const completedListIcon = (
            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf:'stretch'}}>
                <Image 
                    style={styles.consultationItemImage}
                    source={require('../assets/NewCaseConsultationsIcon.png')}
                />
                <View style={[styles.viewSeparator, {marginHorizontal:5}]}/>
            </View>
        )

        return (
            <View style={styles.container}>
                {this.props.list === 'Completed' ? completedListIcon : <View />}
                <View style={styles.timeView}>
                    <Text style={styles.date}>18</Text>
                    <Text style={styles.time}>01:30 PM</Text>
                </View>
                <View style={styles.viewSeparator} />
                <View style={styles.contentView}>
                    <View>
                        <Text style={styles.patientName}>Pat 504</Text>
                        <Text style={styles.speciality}>No problem selected</Text>
                        <Text style={styles.location}>Chandigarh</Text> 
                    </View>
                    <View style={styles.accessoryView}>
                        <Text style={styles.timeAgo}>1 months ago</Text>
                        <Image 
                            style={styles.disclosureImage}
                            source={require('../assets/disclosure.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: 'white',
        padding: 10
    },
    consultationItemImage: {
        width: 25,
        height: 25,
        resizeMode: Image.resizeMode.contain,
    },
    timeView: {
        paddingRight: 5,
        alignItems: 'center',
    },
    date: {
        fontFamily: 'Avenir-Black',
        fontSize: 24,
        color: '#007FFC'
    },
    time: {
        fontFamily: 'Avenir-Book',
        fontSize: 12,
        color: '#232A37'
    },
    viewSeparator: {
        width: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FF8D36',
    },
    contentView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    patientName: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 17,
        color: '#232A37'

    },
    speciality: {
        fontFamily: 'Avenir-Book',
        fontSize: 12,
        color: '#232A37'
    },
    location: {
        fontFamily: 'Avenir-Book',
        fontSize: 12,
        color: '#8F8F94'
    },
    accessoryView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeAgo: {
        fontFamily: 'Avenir-Book',
        fontSize: 12,
        color: '#8F8F94'
    },
    disclosureImage: {
        width: 15,
        height: 15,
        resizeMode: Image.resizeMode.contain,
    }
})