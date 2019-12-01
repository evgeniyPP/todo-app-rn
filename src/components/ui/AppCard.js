import React from "react";
import { StyleSheet, View } from "react-native";

export default ({ children, style }) => (
  <View style={{ ...css.default, ...style }}>{children}</View>
);

const css = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    elevation: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 10
  }
});
