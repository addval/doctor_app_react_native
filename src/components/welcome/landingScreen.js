import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

import CustomButton from "../widgets/customButton";


class LandingScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.rootView}>

      <Image source={require('../../assets/ic_kulcare_logo.png')}
      style={{
        width: 300,
        height: 150,
        resizeMode: Image.resizeMode.contain,
        alignSelf: "center"
      }}/>

<Image source={require('../../assets/ic_heart_hands.png')}
      style={{
        height: 252,
        resizeMode: Image.resizeMode.contain,
        alignSelf: "center",
        marginTop:38,
        marginBottom:22,
        marginLeft:22,
        marginRight:22
      }}/>

      <Text style={styles.blueText}>
        Your online clinic
      </Text>

        <View style={styles.bottomButtons}>
          <CustomButton
            style={[styles.lightBlueBtn]}
            title="Login" onPress={() => navigate("LoginPhoneScreen", { })}/>
          <CustomButton
            style={[styles.darkBlueBtn]}
            title="Signup" onPress={()=> navigate("SignupPhoneScreen", { })}/>
        </View>
      </View>
    );

  }

};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  lightBlueBtn:{
    alignItems: "center",
    backgroundColor: "#3395FF",
    padding: 10,
    height: 58,
  },
  darkBlueBtn: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    height: 58
  },
  blueText:{
    color:"#007AFF",
    marginTop:18,
    marginBottom:8,
    fontSize:29,
    alignSelf:"center"
  }
});
export default LandingScreen;
