import React from "react";
import { StyleSheet, Text } from "react-native";

export const TextRegular = ({ children, style }) => (
  <Text style={{ ...css.regular, ...style }}>{children}</Text>
);

export const TextBold = ({ children, style }) => (
  <Text style={{ ...css.bold, ...style }}>{children}</Text>
);

const css = StyleSheet.create({
  regular: {
    fontFamily: "roboto-regular"
  },
  bold: {
    fontFamily: "roboto-bold"
  }
});
