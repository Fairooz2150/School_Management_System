import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage
import authReducer from "./features/authSlice";
import studentReducer from "./features/studentSlice";
import libraryReducer from "./features/librarySlice";
import feesReducer from "./features/feesSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist 'auth' reducer
};

// Create persisted reducer for auth
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    students: studentReducer,
    library: libraryReducer,
    fees: feesReducer,
  },
});

export const persistor = persistStore(store);
