import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "../theme";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert(null, "Задача не может быть пустой");
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
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">
        Добавить
      </AntDesign.Button>
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
