import React, { Component } from 'react';
import { View,StyleSheet } from "react-native";

class InboxContainerScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.rootView}></View>
        );
    }
    }

const styles = StyleSheet.create({
    rootView: {
      flex: 1,
      backgroundColor: "#F0F8FF"
    }
});

export default InboxContainerScreen;