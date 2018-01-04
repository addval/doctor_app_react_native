import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[this.props.style,{justifyContent:"center"}]}
          onPress={() => this.props.onPress()}
        >
        <Text style={{ textAlign: "center", color:"#fff", fontSize:18 }}>{this.props.title}</Text>
        </TouchableOpacity>
      
    );
  }
}

export default CustomButton;
