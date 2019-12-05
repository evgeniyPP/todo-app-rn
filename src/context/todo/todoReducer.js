import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

const handlers = {
  [ADD_TODO]: (state, { value }) => ({
    ...state,
    todos: [value, ...state.todos]
  }),
  [UPDATE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map((todo, index) =>
      index === payload.id ? payload.value : todo
    )
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo, index) => index !== id)
  }),
  DEFAULT: state => state
};

export default (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
