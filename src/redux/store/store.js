import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/tasks";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

console.log(store.getState().task);

export default store;
