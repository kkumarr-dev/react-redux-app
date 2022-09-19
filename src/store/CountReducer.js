import { desc, inc } from "./CounterActions";

export const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case inc:
      return state + 1;
    case desc:
      return state - 1;
    default:
      return state;
  }
};
