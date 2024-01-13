import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./auth";
import recommendSlice from "./recommend";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  recommend: recommendSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
