import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { TextBold } from "./Fonts";
import theme from "../../theme";

export default ({ children, onPress, color = theme.mainColor }) => {
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable onPress={onPress} activeOpacity={0.4}>
      <View style={{ ...css.button, backgroundColor: color }}>
        <TextBold style={css.text}>{children}</TextBold>
      </View>
    </Touchable>
  );
};

const css = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
});
