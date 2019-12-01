import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const Navbar = props => {
  return (
    <View style={css.navbar}>
      <Text style={css.text}>Todo App on React Native!</Text>
    </View>
  );
};

const css = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: theme.mainColor,
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
});

export default Navbar;
