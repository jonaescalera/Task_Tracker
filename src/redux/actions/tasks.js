import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await fetch("http://localhost:5000/tasks").then((res) => res.json());
});

// export const fetchStates = createAsyncThunk("tasks/fetchStates", async () => {
//   return await fetch("http://localhost:5000/states").then((res) => res.json());
// });

export const addTask = createAsyncThunk("task/post", async (task) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch("http://localhost:5000/tasks", requestOptions);
  const data = await response.json();

  return data;
});

export const updateTask = createAsyncThunk("task/put", async (task) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch(
    `http://localhost:5000/tasks/${task.id}`,
    requestOptions
  );

  const data = await response.json();
  return data;
});

export const deleteTask = createAsyncThunk("task/delete", async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });
  return id;
});
