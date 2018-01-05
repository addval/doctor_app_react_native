import React, { Component } from 'react'
import {
Text,
Button,
SectionList,
View,
Image,
StyleSheet
} from 'react-native'

const sections = [
{
id:0,
title:'2017-12-26',
data:[
      {id: 0, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Mahesh Bhupati' },
      {id: 1, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Leander Pace'},
      {id: 2, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Novak Yokovich'},
]
},
{
id:1,
title:'2017-12-20',
data:[
      {id: 0, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Virat Kohli' },
      {id: 1, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'AB De Villiers'},
      {id: 2, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Ravi Ashwin'},
]
},
{
id:2,
title:'2017-11-11',
data:[
      {id: 0, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'John Doe' },
      {id: 1, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'Sarah Doe'},
      {id: 2, title: 'Video Consult', desc:'You have received a new Video Consultation appointment from ', patientName:'John Wick'},
]
}
]
const extractKey = ({id}) => id

export default class NotificationScreen extends Component{
renderItem = ({item}) => {
    return(
        <View style={styles.rowContainer}>
        <Image source = {require("../assets/NewCaseConsultationsIcon.png")} style={{
              paddingRight: 10,
              width: 50,
              height: 50,
              resizeMode: Image.resizeMode.contain,
            }} />
        <View>
        <Text style = {styles.row}>
        {item.title}
        </Text>
        <Text style = {styles.desc}>
        {item.desc + item.patientName}
        </Text>
        </View>
        </View>
    );
}

renderSection = ({section}) => {
return(
    <Text style = {styles.header}>
    {section.title}
    </Text>
)
}


render(){
    return(
        <View style={styles.container}>
        <SectionList sections={sections} renderItem={this.renderItem} renderSectionHeader={this.renderSection} keyExtractor={extractKey} />
        </View>
    );
}
}

const styles = StyleSheet.create(
    {
container : {
           marginTop: 0,
           flex: 1,
       } ,
row: {
    paddingTop: 5,
    paddingLeft: 20,
    marginBottom: 5,
    backgroundColor: 'white',
    fontSize:14,
    color:'#007AFF',
    fontWeight: 'bold'
  },
  desc:{
      paddingLeft:20
  },
  rowContainer: {
    padding: 15,
    marginBottom: 2,
    backgroundColor: 'white',
    flexDirection:'row',
  },
header: {
    padding: 15,
    backgroundColor: '#bbb',
    color: 'black',
    fontSize:17,
    fontWeight: 'bold',
  }
}
)

