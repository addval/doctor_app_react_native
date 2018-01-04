import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from "react-native";

class DashboardScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <View style={styles.root}>
        <View style={[styles.blueBackground]}>
          <View style={styles.horizontalView}>
            <View style={styles.container}>
              <Text style={styles.textBig}>11</Text>
              <Text style={styles.textSmall}>Patient(s) Helped</Text>
            </View>
            <View style={styles.horizontalDivider}>
            </View>
            <View style={styles.container}>
              <Text style={styles.textBig}>$150</Text>
              <Text style={styles.textSmall}>Money Earned</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#F0F8FF"
  },
  blueBackground: {
    backgroundColor: "#007AFF",
    height: 150
  },
  horizontalView: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textBig: {
    color: "#fff",
    fontSize:19
  },
  textSmall:{
    color: "#fff",
    fontSize:11,
    marginTop:15
  },
  horizontalDivider:{
      height:75,
      width:0.5,
      backgroundColor:"#fff",
      marginTop:37
    
  }
});

export default DashboardScreen;
