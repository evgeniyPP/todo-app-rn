import React, { useState, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import theme from "./theme";
import TodoContext from "./context/todo/todoContext";

export default () => {
  const todosContext = useContext(TodoContext);
  const [todoId, setTodoId] = useState(null);

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
      todos={todosContext.todos}
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
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.paddingHorizontal,
    paddingVertical: 20,
    flex: 1
  }
});
