import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasks,
  fetchStates,
  deleteTask,
  addTask,
  updateTask,
} from "../redux/actions/tasks";
import { tasksSelectors } from "../redux/reducers/tasks";
import Table from "./Table";
import Form from "./Form";

const TaskTracker = () => {
  const dispatch = useDispatch();
  const [dataToEdit, setDataToEdit] = useState(null);
  const tasks = useSelector(tasksSelectors.selectAll);
  const states = useSelector((state) => state.tasks.states);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchStates());
  }, [dispatch]);

  const onRemoveTask = useCallback((id) => {
    dispatch(deleteTask(id));
  }, []);

  const onAddTask = useCallback((data) => {
    dispatch(addTask(data));
  }, []);

  const updateData = (data) => {
    dispatch(updateTask(data));
  };

  return (
    <div>
      <Table
        data={tasks}
        states={states}
        removeTask={onRemoveTask}
        setDataToEdit={setDataToEdit}
      />
      <Form
        data={states}
        addTask={onAddTask}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        updateData={updateData}
      />
    </div>
  );
};

export default TaskTracker;
