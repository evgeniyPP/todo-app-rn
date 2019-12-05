import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import TodoContext from "./todoContext";
import screenContext from "../screen/screenContext";
import todoReducer from "./todoReducer";
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

export default ({ children }) => {
  const initialState = {
    todos: [
      "Немного фальшивых дел",
      "Доделать это приложение",
      "Выучить React Native",
      "Захватить мир",
      "Закончить этот курс"
    ]
  };
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  const { changeScreen } = useContext(screenContext);

  const addTodo = value => dispatch({ type: ADD_TODO, value });

  const updateTodo = (id, value) =>
    dispatch({ type: UPDATE_TODO, payload: { id, value } });

  const removeTodo = id => {
    Alert.alert(
      "Удалить задачу?",
      `Вы уверены, что хотите удалить задачу "${todos[id]}"?`,
      [
        {
          text: "Отмена",
          style: "positive"
        },
        {
          text: "Удалить",
          style: "negative",
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          }
        }
      ]
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
