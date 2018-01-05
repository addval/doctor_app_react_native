import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Image
} from "react-native";

import CustomButton from "../widgets/customButton";

class LoginPhoneScreen extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: ""
    };
  
  }

  static navigationOptions = {
    title: "Login",
    backTitle: " "
  };

  goNext = ()=>{
    var _username = this.state.phoneNumber;
    if (_username.length !== 0) {
      this.props.navigation.navigate("LoginPasswordScreen", {
        username: _username
      });
    }else{
      Alert.alert("Invalid phone number");
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.rootView}>
    
        <Image
          source={require("../../assets/ic_kulcare_logo.png")}
          style={{
            width: 300,
            height: 150,
            resizeMode: Image.resizeMode.contain,
            alignSelf: "center"
          }}
        />
        <View style={styles.bottomButtons}>
          
            <View style={[styles.horizontalView, styles.phoneNumberView]}>
              <Text>+91</Text>
              <TextInput
                editable={true}
                maxLength={10}
                autoFocus={true}
                underlineColorAndroid="transparent"
                keyboardType="phone-pad"
                returnKeyType="done"
                placeholder="Enter phone number"
                style={{ left: 20 }}
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
              />
            </View>
          
          <CustomButton
            style={[styles.darkBlueBtn]}
            title="Next"
            onPress={() => this.goNext()}
          />
        </View>
    
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#F0F8FF"
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  darkBlueBtn: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    height: 58
  },
  horizontalView: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  phoneNumberView: {
    padding: 20,
    backgroundColor: "#FFF"
  }
});

export default LoginPhoneScreen;
