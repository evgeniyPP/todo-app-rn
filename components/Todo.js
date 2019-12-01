import React from "react";
import { StyleSheet, Text } from "react-native";

const Todo = ({ todo }) => {
  return <Text style={css.todo}>{todo}</Text>;
};

const css = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10
  }
});

export default Todo;
