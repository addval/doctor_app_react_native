import React, { Component } from "react";
import { AppRegistry } from "react-native";

import { Provider } from "react-redux";

import store from "./src/redux/store";

import App from "./src/navigation/AppNavigation";

class DoctorApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("DoctorApp", () => DoctorApp);
