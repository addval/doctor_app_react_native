import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TextInput,KeyboardAvoidingView } from "react-native";

import CustomButton from "../widgets/customButton";

class SignupPasswordScreen extends Component {
  static navigationOptions = {
    title: "SignUp",
    backButtonTitle:' '
  };
  state = {};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.rootView}>
        <View style={styles.bottomButtons}>
          <KeyboardAvoidingView behavior="height" >
          <View style={[styles.horizontalView, styles.phoneNumberView]}>
            <TextInput           
              editable={true}
              maxLength={16}
              autoFocus={false}
              underlineColorAndroid="transparent"                                          
              returnKeyType="next"
              placeholder="Enter password"
              style={{left:20}}
              secureTextEntry={true}
            />
            </View>
          </KeyboardAvoidingView>
          <CustomButton
            style={[styles.darkBlueBtn]}
            title="Next"
            onPress={()=> navigate("SignupCompleteScreen", { })}
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
    justifyContent: "flex-start",
    alignItems:"stretch"
  },
  phoneNumberView: {
    padding: 20,
    backgroundColor: "#FFF"
  }
});

export default SignupPasswordScreen;
