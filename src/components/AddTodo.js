import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import theme from "../theme";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Поле пустое");
    }
  };

  return (
    <View style={css.block}>
      <TextInput
        style={css.input}
        onChangeText={setValue}
        value={value}
        placeholder="Новая задача"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const css = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: theme.mainColor,
    padding: 10
  }
});

export default AddTodo;
