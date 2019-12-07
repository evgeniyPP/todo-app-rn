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

const handlers = {
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [{ id: payload.id, value: payload.value }, ...state.todos]
  }),
  [UPDATE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map(todo => (todo.id === payload.id ? payload : todo))
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [HIDE_LOADER]: state => ({ ...state, loading: false }),
  [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  [CLEAR_ERROR]: state => ({ ...state, error: null }),
  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
  DEFAULT: state => state
};

export default (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
