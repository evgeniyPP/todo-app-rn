import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TextBold } from "./ui/Fonts";
import theme from "../theme";

const Navbar = props => {
  return (
    <View
      style={{
        ...css.navbar,
        ...Platform.select({
          ios: css.navbarIos,
          android: css.navbarAndroid
        })
      }}
    >
      <TextBold style={css.text}>Todo App on React Native!</TextBold>
    </View>
  );
};

const css = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  navbarAndroid: { backgroundColor: theme.mainColor },
  navbarIos: { borderBottomColor: theme.mainColor, borderBottomWidth: 1 },
  text: {
    color: Platform.OS === "ios" ? theme.mainColor : "#fff",
    fontSize: 20
  }
});

export default Navbar;
