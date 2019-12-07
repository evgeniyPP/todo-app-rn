import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import TodoContext from "./todoContext";
import screenContext from "../screen/screenContext";
import todoReducer from "./todoReducer";
import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS
} from "../types";

export default ({ children }) => {
  const initialState = {
    todos: [],
    loading: true,
    error: null
  };
  const [{ todos, loading, error }, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  const { changeScreen } = useContext(screenContext);

  const URL = "https://epp-todo-react-native.firebaseio.com";

  const addTodo = async value => {
    const response = await fetch(`${URL}/todos.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ value })
    });
    const data = await response.json();
    dispatch({ type: ADD_TODO, payload: { id: data.name, value } });
    if (data) return true;
  };

  const updateTodo = async (id, value) => {
    clearError();
    try {
      await fetch(`${URL}/todos/${id}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value })
      });
      dispatch({ type: UPDATE_TODO, payload: { id, value } });
    } catch (e) {
      showError("Что-то пошло не так...");
    }
  };

  const removeTodo = id => {
    Alert.alert(
      "Удалить задачу?",
      `Вы уверены, что хотите удалить задачу "${
        todos.find(todo => todo.id === id).value
      }"?`,
      [
        {
          text: "Отмена",
          style: "positive"
        },
        {
          text: "Удалить",
          style: "negative",
          onPress: async () => {
            clearError();
            try {
              await fetch(`${URL}/todos/${id}.json`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
              });
              changeScreen(null);
              dispatch({ type: REMOVE_TODO, id });
            } catch (e) {
              showError("Что-то пошло не так...");
            }
          }
        }
      ]
    );
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = error => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const response = await fetch(`${URL}/todos.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
      dispatch({ type: FETCH_TODOS, todos: todos.reverse() });
    } catch (e) {
      showError("Что-то пошло не так...");
    } finally {
      hideLoader();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        addTodo,
        updateTodo,
        removeTodo,
        fetchTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
