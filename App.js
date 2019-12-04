import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import theme from "./src/theme";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    "Немного фальшивых дел",
    "Доделать это приложение",
    "Выучить React Native",
    "Захватить мир",
    "Закончить этот курс"
  ]);

  const loadApp = async () => {
    await Font.loadAsync({
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => {
          setIsReady(true);
        }}
      />
    );
  }

  const addTodo = todo => {
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = index => {
    Alert.alert(
      "Удалить задачу?",
      `Вы уверены, что хотите удалить задачу "${todos[index]}"?`,
      [
        {
          text: "Отмена",
          style: "positive"
        },
        {
          text: "Удалить",
          style: "negative",
          onPress: () => {
            setTodoId(null);
            setTodos(prev =>
              prev.filter((todo, currIndex) => currIndex !== index)
            );
          }
        }
      ]
    );
  };

  const openTodo = index => {
    setTodoId(index);
  };

  const closeTodo = () => {
    setTodoId(null);
  };

  const changeTodo = newValue => {
    setTodos(prev =>
      prev.map((todo, currIndex) => (currIndex === todoId ? newValue : todo))
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      openTodo={openTodo}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  );

  if (todoId !== null) {
    content = (
      <TodoScreen
        todoItem={todos[todoId]}
        closeTodo={closeTodo}
        deleteTodo={deleteTodo}
        index={todoId}
        changeTodo={changeTodo}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.paddingHorizontal,
    paddingVertical: 20,
    flex: 1
  }
});
