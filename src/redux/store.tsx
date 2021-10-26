import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
import firebaseReducer from "./firebase-slice";

const store = configureStore({
  reducer: { todos: todoReducer, firebase: firebaseReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
