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

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  * as Actions from "../../redux/actions/auth";

import CustomButton from "../widgets/customButton";
import { login } from "../../redux/actions/auth";

const mapStateToProps = (state,ownProps) =>{
  return {
    user:state.auth.user
  };
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onLogin:(userCredentials)=> {dispatch(login(userCredentials));}
  }
}


class LoginPasswordScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Login",
    backTitle: " "
  };

  state = {
    _username: this.props.navigation.state.params.username,
    _password: ""
  };

  goNext = () => {
    var password = this.state._password;
    if (password.length !== 0) {
      
      var userCredentials ={
        username: this.state._username,
        password:this.state._password
      }
      
      this.props.onLogin(userCredentials);

    } else {
      Alert.alert("Invalid password");
    }
    
  };


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.rootView}>
        <Image
          source={require("../assets/ic_kulcare_logo.png")}
          style={{
            width: 300,
            height: 150,
            resizeMode: Image.resizeMode.contain,
            alignSelf: "center"
          }}
        />
        <View style={styles.bottomButtons}>
          <KeyboardAvoidingView behavior="height">
            <View style={[styles.horizontalView, styles.phoneNumberView]}>
              <TextInput
                editable={true}
                maxLength={16}
                autoFocus={true}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                placeholder="Enter password"
                style={{ left: 20 }}
                secureTextEntry={true}
                onChangeText={password =>
                  this.setState({ _password: password })
                }
              />
            </View>
          </KeyboardAvoidingView>
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
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  phoneNumberView: {
    padding: 20,
    backgroundColor: "#FFF"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPasswordScreen)
