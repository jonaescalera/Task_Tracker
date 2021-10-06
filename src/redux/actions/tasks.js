import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await fetch(API_URL).then((res) => res.json());
});

export const addTask = createAsyncThunk("task/post", async (task) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch(API_URL, requestOptions);
  const data = await response.json();

  return data;
});

export const updateTask = createAsyncThunk("task/put", async (task) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  const response = await fetch(`${API_URL}/${task.id}`, requestOptions);

  const data = await response.json();
  return data;
});

export const deleteTask = createAsyncThunk("task/delete", async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return id;
});
