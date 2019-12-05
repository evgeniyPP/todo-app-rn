import React, { useState, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import TodoContext from "./context/todo/todoContext";
import ScreenContext from "./context/screen/screenContext";
import theme from "./theme";

export default () => {
  const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  //   const deleteTodo = index => {
  //     Alert.alert(
  //       "Удалить задачу?",
  //       `Вы уверены, что хотите удалить задачу "${todos[index]}"?`,
  //       [
  //         {
  //           text: "Отмена",
  //           style: "positive"
  //         },
  //         {
  //           text: "Удалить",
  //           style: "negative",
  //           onPress: () => {
  //             setTodoId(null);
  //             setTodos(prev =>
  //               prev.filter((todo, currIndex) => currIndex !== index)
  //             );
  //           }
  //         }
  //       ]
  //     );
  //   };

  // const openTodo = index => {
  //   setTodoId(index);
  // };

  // const closeTodo = () => {
  //   setTodoId(null);
  // };

  let content = (
    <MainScreen
      todos={todos}
      openTodo={changeScreen}
      addTodo={addTodo}
      deleteTodo={removeTodo}
    />
  );

  if (todoId !== null) {
    content = (
      <TodoScreen
        todoItem={todos[todoId]}
        closeTodo={() => changeScreen(null)}
        deleteTodo={removeTodo}
        index={todoId}
        changeTodo={updateTodo}
        todoId={todoId}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.paddingHorizontal,
    paddingVertical: 20,
    flex: 1
  }
});
