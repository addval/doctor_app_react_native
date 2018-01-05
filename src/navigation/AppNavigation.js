import React, { Component } from "react";
import { Text, Animated, Easing } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { connect } from "react-redux";

import LandingScreen from "../components/welcome/landingScreen";
import LoginPhoneScreen from "../components/login/loginPhoneScreen";
import LoginPasswordScreen from "../components/login/loginPasswordScreen";
import SignupPasswordScreen from "../components/signup/signupPasswordScreen";
import SignupPhoneScreen from "../components/signup/signupPhoneScreen";
import SignupCompleteScreen from "../components/signup/signupCompleteScreen";
import DashboardScreen from "../components/dashboard/dashboardScreen";
import Patients from "../components/Patients/Patients";

const LoginStack = StackNavigator(
  {
    LandingScreen: { screen: LandingScreen },
    LoginPhoneScreen: { screen: LoginPhoneScreen },
    LoginPasswordScreen: { screen: LoginPasswordScreen },
    SignupPasswordScreen: { screen: SignupPasswordScreen },
    SignupPhoneScreen: { screen: SignupPhoneScreen },
    SignupCompleteScreen: { screen: SignupCompleteScreen }
  },
  {
    headerMode: "float",
    transitionConfig: noTransitionConfig
  }
);

// drawer stack
const DrawerStack = DrawerNavigator({
  Home: { screen: DashboardScreen }
});

const DashboardStack = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
    Patients: { screen: Patients }

  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      title: "Welcome",
      gesturesEnabled: false,
      headerLeft: (
        <Text
          onPress={() => {
            if (navigation.state.index === 0) {
              navigation.navigate("DrawerOpen");
            } else {
              navigation.navigate("DrawerClose");
            }
          }}
          style={{ padding: 5 }}
        >
          Menu
        </Text>
      )
    }),
    transitionConfig: noTransitionConfig
  }
);

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

class Application extends Component {
  render() {
    // if (this.props.user.loggedIn) {
    //   return <DashboardStack/>;
    // } else {
    //   return <LoginStack/>;
    // }
    return <DashboardStack/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      loggedIn: state.auth.user.loggedIn,
      username: state.auth.user.username,
      password: state.auth.user.password
    }
  };
};

export default connect(mapStateToProps)(Application);

