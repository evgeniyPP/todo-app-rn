import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [payload, ...state.todos] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === payload.id ? payload.value : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== payload)
      };
    default:
      return state;
  }
};
