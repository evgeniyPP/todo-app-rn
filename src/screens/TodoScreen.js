import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { TextRegular } from "../components/ui/Fonts";
import AppButton from "../components/ui/AppButton";
import AppCard from "../components/ui/AppCard";
import theme from "../theme";
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
        <TextRegular style={css.text}>{todoItem}</TextRegular>
        <AppButton onPress={setModalTrue}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={css.buttons}>
        <View style={css.button}>
          <AppButton onPress={closeTodo} color={theme.greyColor}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={css.button}>
          <AppButton
            onPress={deleteTodo.bind(null, index)}
            color={theme.dangerColor}
          >
            <FontAwesome name="remove" size={20} />
          </AppButton>
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
    width: Dimensions.get("window").width / 3
  },
  card: {
    marginBottom: 20
  }
});

export default TodoScreen;
