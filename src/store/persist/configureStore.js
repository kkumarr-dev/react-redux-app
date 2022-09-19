import { persistStore, persistReducer } from "redux-persist";
import { textReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "../CountReducer";
import { userSlice } from "../userSlice";

function configStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "form", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ["foo"],
      },
      textReducer
    ),
  });
  const store = configureStore({
    reducer: {
      persist: reducer,
      count: CountReducer,
      user: userSlice.reducer,
    },
  });

  const persistor = persistStore(store, window.PRELOADED_STATE);
  return { store, persistor };
}

export default configStore;
