import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "./CountReducer";
import { userSlice } from "./userSlice";
const reducer = combineReducers({
  count: CountReducer,
  user: userSlice.reducer,
});
export const Store = configureStore({
  reducer,
});
