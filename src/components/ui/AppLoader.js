import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import theme from "../../theme";

export const AppLoader = () => (
  <View style={css.center}>
    <ActivityIndicator size="large" color={theme.mainColor} />
  </View>
);

const css = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
