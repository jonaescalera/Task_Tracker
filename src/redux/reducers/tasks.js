import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask, addTask, updateTask } from "../actions/tasks";

const taskAdapter = createEntityAdapter({
  selectId: (task) => task.id,
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskAdapter.getInitialState({ loading: false, states: [] }),
  reducers: {},
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      taskAdapter.setAll(state, payload);
    },
    [fetchTasks.rejected]: (state) => {
      state.loading = false;
    },
    [deleteTask.fulfilled]: (state, { payload: id }) => {
      state.loading = false;
      taskAdapter.removeOne(state, id);
    },
    [deleteTask.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deleteTask.pending]: (state) => {
      state.loading = true;
    },
    [addTask.fulfilled]: (state, { payload }) => {
      state.loading = false;
      taskAdapter.addOne(state, payload);
    },
    [addTask.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addTask.pending]: (state) => {
      state.loading = true;
    },
    [updateTask.fulfilled]: (state, { payload }) => {
      state.loading = false;
      taskAdapter.upsertOne(state, payload);
    },
    [updateTask.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [updateTask.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const tasksSelectors = taskAdapter.getSelectors((state) => state.tasks);

export default taskSlice.reducer;
