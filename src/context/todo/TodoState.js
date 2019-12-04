import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";

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
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
