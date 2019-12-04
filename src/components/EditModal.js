import React, { useState } from "react";
import { View, StyleSheet, TextInput, Modal } from "react-native";
import AppButton from "./ui/AppButton";
import theme from "../theme";

export default ({ visible, onCancel, value, changeTodo }) => {
  const [text, setText] = useState(value);

  const handleChange = () => {
    changeTodo(text);
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={css.wrapper}>
        <TextInput
          style={css.input}
          defaultValue={value}
          autoFocus
          maxLength={64}
          onChangeText={setText}
        />
        <View style={css.buttons}>
          <AppButton onPress={onCancel} color={theme.dangerColor}>
            Отменить
          </AppButton>
          <AppButton onPress={handleChange}>Изменить</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const css = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    borderBottomColor: theme.mainColor,
    borderBottomWidth: 2,
    width: "80%"
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around"
  }
});
