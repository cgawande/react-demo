import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import loginSlice from "./login/loginSlice";
import subAdminSlice from "./subAdminSlice";
import comUpSlice from "./comUpSlice";

const persistConfig = {   
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginSlice,

  compUpSlice: comUpSlice,
  subAdmin: subAdminSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
