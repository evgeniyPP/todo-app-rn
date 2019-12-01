import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = props => {
  return (
    <View style={css.navbar}>
      <Text style={css.text}>Todo App on React Native</Text>
    </View>
  );
};

const css = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
});

export default Navbar;
