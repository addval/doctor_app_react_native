import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {Provider} from 'react-redux'

import store from './src/redux/reducers/store'

import App from './src/navigation/AppNavigation';

class DoctorApp extends Component {
  render() {
    return(
      // <Provider> allows us to access the store for dispatching actions and receiving data from
      // the state in it's children i.e. <App/>
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}


AppRegistry.registerComponent('DoctorApp', () => DoctorApp);
