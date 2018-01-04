import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

import CustomButton from "../widgets/customButton";

class SignupCompleteScreen extends Component {
  static navigationOptions = {
    title: "SignUp"
  };
  state = {};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.rootView}>
        <View style={styles.topView}>
          <View style={[styles.phoneNumberView]}>
            <Text>Phone number</Text>
          </View>
          <View style={[styles.phoneNumberView]}>
            <Text>password</Text>
          </View>
        </View>
        <CustomButton
          style={[styles.darkBlueBtn]}
          title="Complete Sign Up!"
          onPress={() => Alert.alert("Welcome")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#F0F8FF"
  },
  topView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
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

export default SignupCompleteScreen;
