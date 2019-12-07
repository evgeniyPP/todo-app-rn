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
  const { todos, updateTodo, removeTodo, checkTodo } = useContext(todoContext);
  const { todoId, changeScreen } = useContext(screenContext);
  const [modal, setModal] = useState(false);
  const thisTodo = todos.find(todo => todo.id === todoId);
  const value = thisTodo.value;
  const isChecked = thisTodo.checked
    ? { textDecorationLine: "line-through" }
    : {};

  return (
    <View style={css.todoScreen}>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={value}
        changeTodo={updateTodo}
        todoId={todoId}
      />
      <AppCard style={css.card}>
        <TextRegular style={{ ...css.text, ...isChecked }}>{value}</TextRegular>
      </AppCard>
      <View style={css.buttons}>
        <View style={css.button}>
          <AppButton onPress={() => setModal(true)}>
            <FontAwesome name="edit" size={25} />
          </AppButton>
        </View>
        <View style={css.button}>
          <AppButton
            onPress={() => checkTodo(todoId)}
            color={theme.orangeColor}
          >
            <FontAwesome name="check-circle" size={25} />
          </AppButton>
        </View>
      </View>
      <View style={css.buttons}>
        <View style={css.button}>
          <AppButton onPress={() => changeScreen(null)} color={theme.greyColor}>
            <AntDesign name="back" size={25} color="#fff" />
          </AppButton>
        </View>
        <View style={css.button}>
          <AppButton
            onPress={() => removeTodo(todoId)}
            color={theme.dangerColor}
          >
            <FontAwesome name="remove" size={25} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  todoScreen: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    width: Dimensions.get("window").width / 3,
    marginBottom: 10
  },
  card: {
    marginBottom: 20
  },
  editBtn: {
    alignSelf: "center",
    minWidth: "100%",
    maxWidth: 350,
    marginBottom: 5
  }
});

export default TodoScreen;
