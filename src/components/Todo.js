import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextRegular } from "./ui/Fonts";

const Todo = ({ todo, index, openTodo, deleteTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={openTodo.bind(null, index)}
      onLongPress={deleteTodo.bind(null, index)}
    >
      <TextRegular style={css.todo}>{todo}</TextRegular>
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
