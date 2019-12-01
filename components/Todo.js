import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={deleteTodo.bind(null, index)}
    >
      <Text style={css.todo}>{todo}</Text>
    </TouchableOpacity>
  );
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
