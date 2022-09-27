import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { textReducer } from "./reducers/textReducer";
import userReducer from "./reducers/userSlice";
import { CountReducer } from "./reducers/countReducer";
import todoReducer from "./reducers/todoSlice";

function configStore() {
  const persistReducers = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "form",
        storage,
        debug: true,
        blacklist: ["foo"],
      },
      textReducer
    ),
  });
  const store = configureStore({
    reducer: {
      persist: persistReducers,
      count: CountReducer,
      user: userReducer,
      todo: todoReducer,
      text: textReducer,
    },
  });

  const persistor = persistStore(store, window.PRELOADED_STATE);
  return { store, persistor };
}

export default configStore;
