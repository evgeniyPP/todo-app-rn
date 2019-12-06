import React, { useState, useContext } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { TextRegular } from "../components/ui/Fonts";
import todoContext from "../context/todo/todoContext";
import screenContext from "../context/screen/screenContext";
import AppButton from "../components/ui/AppButton";
import AppCard from "../components/ui/AppCard";
import theme from "../theme";
import EditModal from "../components/EditModal";

const TodoScreen = () => {
  const { todos, updateTodo, removeTodo } = useContext(todoContext);
  const { todoId, changeScreen } = useContext(screenContext);
  const [modal, setModal] = useState(false);
  const thisTodo = todos.find(todo => todo.id === todoId).value;

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(falses)}
        value={thisTodo}
        changeTodo={updateTodo}
        todoId={todoId}
      />
      <AppCard style={css.card}>
        <TextRegular style={css.text}>{thisTodo}</TextRegular>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={css.buttons}>
        <View style={css.button}>
          <AppButton onPress={() => changeScreen(null)} color={theme.greyColor}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={css.button}>
          <AppButton
            onPress={() => removeTodo(todoId)}
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
