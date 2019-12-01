import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = props => {
  return (
    <View style={css.block}>
      <TextInput style={css.input} />
      <Button title="Добавить" />
    </View>
  );
};

const css = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    padding: 10
  }
});

export default AddTodo;
