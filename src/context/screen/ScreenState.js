import React, { useReducer } from "react";
import ScreenContext from "./screenContext";
import screenReducer from "./screenReducer";
import { CHANGE_SCREEN } from "../types";

export default ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, id });

  return (
    <ScreenContext.Provider
      value={{
        todoId: state,
        changeScreen
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
