import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TextInput,KeyboardAvoidingView } from "react-native";

import CustomButton from "../widgets/customButton";

class SignupPhoneScreen extends Component {
  static navigationOptions = {
    title: "SignUp",
    backButtonTitle:" "
  };
  state = {};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.rootView}>
        <View style={styles.bottomButtons}>
          <KeyboardAvoidingView behavior="height" >
          <View style={[styles.horizontalView, styles.phoneNumberView]}>
            <Text>+91</Text>
            <TextInput
              editable={true}
              maxLength={10}
              autoFocus={false}
              underlineColorAndroid="transparent"                                          
              keyboardType="phone-pad"
              returnKeyType="next"
              placeholder="Enter phone number"
              style={{left:20}}
            />
            </View>
          </KeyboardAvoidingView>
          <CustomButton
            style={[styles.darkBlueBtn]}
            title="Next"
            onPress={() => navigate("SignupPasswordScreen", { })}
          />
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

export default SignupPhoneScreen;
