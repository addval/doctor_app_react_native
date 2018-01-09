import React, { Component } from "react";
import { Image, Animated, Easing, TouchableOpacity } from "react-native";
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
import InboxContainerScreen from "../components/inbox/inboxContainerScreen";
import NotificationScreen from "../components/Notifications/notificationScreen";


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
    headerMode: "float"
  }
);

// drawer stack
const DrawerStack = DrawerNavigator({
  Home: { screen: DashboardScreen }
});

const DashboardStack = StackNavigator({
  Drawer: {
    screen: DrawerStack,
    navigationOptions: ({ navigation }) => ({
      title: "Welcome",
      headerStyle: { backgroundColor: "#007AFF" },
      gesturesEnabled: false,
      headerTintColor: "white",
      headerLeft: (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            if (navigation.state.index === 0) {
              navigation.navigate("DrawerOpen");
            } else {
              navigation.navigate("DrawerClose");
            }
          }}
        >
          <Image
            source={require("../assets/ic_menu.png")}
            style={{ padding: 5, width: 24, height: 24, marginLeft: 16 }}
          />
        </TouchableOpacity>
      )
    })
  },
  Inbox: {
    screen: InboxContainerScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Inbox",
      headerStyle: { backgroundColor: "#007AFF" },
      gesturesEnabled: false,
      headerTintColor: "white"
    })
  },
  Patient: { screen: Patients ,
  navigationOptions: ({ navigation }) => ({
      title: "Patients",
      headerStyle: { backgroundColor: "#007AFF" },
      gesturesEnabled: false,
      headerTintColor: "white"
    })
  },
    Notifications: { screen: NotificationScreen ,
  navigationOptions: ({ navigation }) => ({
      title: "Notifications",
      headerStyle: { backgroundColor: "#007AFF" },
      gesturesEnabled: false,
      headerTintColor: "white"
    })
  }
});

class Application extends Component {
  render() {
    if (this.props.user.loggedIn) {
      return <DashboardStack/>;
    } else {
      return <LoginStack/>;
    }
    //return <DashboardStack/>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: {
      loggedIn: state.auth.user.loggedIn,
      username: state.auth.user.username,
      password: state.auth.user.password
    },
    store:state.auth.store
  };
};

export default connect(mapStateToProps)(Application);
