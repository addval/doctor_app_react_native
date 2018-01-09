import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity
} from "react-native";

import CustomButton from "../widgets/customButton";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  goToInbox = () => {
    this.props.navigation.navigate("Inbox");
  };

  goToPatient = () => {
    this.props.navigation.navigate("Patient");
  };

  goToNotifications = () => {
    this.props.navigation.navigate("Notifications");
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={[styles.blueBackground]}>
          <View style={styles.horizontalView}>
            <View style={styles.container}>
              <Text style={styles.textBig}>0</Text>
              <Text style={styles.textSmall}>Patient(s) Helped</Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.container}>
              <Text style={styles.textBig}>$0</Text>
              <Text style={styles.textSmall}>Money Earned</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#E9F1FD",
            padding: 5,
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Text>Accepting Cases</Text>
          <Switch />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.menuItem}
          onPress={() => this.goToNotifications()}
        >
          <Image
            source={require("../../assets/ic_dash_notification.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: Image.resizeMode.contain,
              alignSelf: "center"
            }}
          />
          <View>
            <Text style={styles.menuItemHeadingText}>Notifications</Text>
            <Text style={styles.menuItemSubHeadingText}>APPOINTMENTS ETC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.menuItem}
          onPress={() => this.goToInbox()}
        >
          <Image
            source={require("../../assets/ic_dash_inbox.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: Image.resizeMode.contain,
              alignSelf: "center"
            }}
          />
          <View>
            <Text style={styles.menuItemHeadingText}>Inbox</Text>
            <Text style={styles.menuItemSubHeadingText}>
              NEW & COMPLETED CONSULTATIONS
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.menuItem}
          onPress={() => this.goToPatient()}
        >
          <Image
            source={require("../../assets/ic_dash_family.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: Image.resizeMode.contain,
              alignSelf: "center"
            }}
          />
          <View>
            <Text style={styles.menuItemHeadingText}>Patients</Text>
            <Text style={styles.menuItemSubHeadingText}>ALL PATIENTS</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.menuItem}>
          <Image
            source={require("../../assets/ic_default_user.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: Image.resizeMode.contain,
              alignSelf: "center"
            }}
          />
          <View>
            <Text style={styles.menuItemHeadingText}>Me</Text>
            <Text style={styles.menuItemSubHeadingText}>
              PROFILE, SETTINGS & PAYMENTS
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#F0F8FF"
  },
  buttonDummy: {
    height: 44,
    width: 100,
    color: "white"
  },
  blueBackground: {
    backgroundColor: "#007AFF",
    height: 170
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
    fontSize: 45
  },
  textSmall: {
    color: "#fff",
    fontSize: 11,
    marginTop: 12
  },
  horizontalDivider: {
    height: 75,
    width: 0.5,
    backgroundColor: "#fff",
    marginTop: 37
  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 38,
    paddingRight: 18,
    paddingBottom: 20,
    marginBottom: 1
  },
  menuItemHeadingText: {
    color: "#007AFF",
    fontSize: 24,
    marginLeft: 35
  },
  menuItemSubHeadingText: {
    color: "#066ED2",
    fontSize: 9,
    marginLeft: 38,
    marginTop: 16
  }
});

export default DashboardScreen;
