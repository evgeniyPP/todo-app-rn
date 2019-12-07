import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS,
  CHECK_TODO
} from "../types";

const handlers = {
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [
      { id: payload.id, value: payload.value, checked: false },
      ...state.todos
    ]
  }),
  [UPDATE_TODO]: (state, { payload }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === payload.id ? { ...payload, checked: todo.checked } : todo
    )
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [HIDE_LOADER]: state => ({ ...state, loading: false }),
  [SHOW_ERROR]: state => ({ ...state, error: "Что-то пошло не так..." }),
  [CLEAR_ERROR]: state => ({ ...state, error: null }),
  [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
  [CHECK_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
  }),
  DEFAULT: state => state
};

export default (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
