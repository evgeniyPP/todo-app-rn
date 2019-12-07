import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextRegular } from "./ui/Fonts";

const Todo = ({ todo, id, openTodo, checkTodo }) => {
  const isChecked = todo.checked ? { textDecorationLine: "line-through" } : {};
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={openTodo.bind(null, id)}
      onLongPress={checkTodo.bind(null, id)}
    >
      <TextRegular style={{ ...css.todo, ...isChecked }}>
        {todo.value}
      </TextRegular>
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
