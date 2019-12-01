import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import theme from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";

const TodoScreen = ({ todoItem, closeTodo, deleteTodo, index, changeTodo }) => {
  const [modal, setModal] = useState(false);

  const setModalTrue = () => {
    setModal(true);
  };
  const setModalFalse = () => {
    setModal(false);
  };

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={setModalFalse}
        value={todoItem}
        changeTodo={changeTodo}
      />
      <AppCard style={css.card}>
        <Text style={css.text}>{todoItem}</Text>
        <Button title="Изменить" onPress={setModalTrue} />
      </AppCard>
      <View style={css.buttons}>
        <View style={css.button}>
          <Button title="Назад" onPress={closeTodo} color={theme.greyColor} />
        </View>
        <View style={css.button}>
          <Button
            title="Удалить"
            onPress={deleteTodo.bind(null, index)}
            color={theme.dangerColor}
          />
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  text: {
    fontSize: 20
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  },
  card: {
    marginBottom: 20
  }
});

export default TodoScreen;
