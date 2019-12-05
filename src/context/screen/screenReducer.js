import { CHANGE_SCREEN } from "../types";

const handlers = {
  [CHANGE_SCREEN]: (state, { id }) => id,
  DEFAULT: state => state
};

export default (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
