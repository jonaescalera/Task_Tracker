import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  fetchTasks,
  deleteTask,
  addTask,
  updateTask,
} from "../redux/actions/tasks";
import { tasksSelectors } from "../redux/reducers/tasks";
import Table from "./Table";
import Form from "./Form";
import TableRow from "./TableRow";
import states from "./constants";
import Status from "./Status";

const TaskTracker = () => {
  const dispatch = useDispatch();
  const [dataToEdit, setDataToEdit] = useState(null);
  const [currentItemId, setCurrentItemId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const tasks = useSelector(tasksSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onRemoveTask = useCallback((id) => {
    dispatch(deleteTask(id));
  }, []);

  const onAddTask = useCallback((data) => {
    dispatch(addTask(data));
    setShowForm(false);
  }, []);

  const updateData = useCallback((data) => {
    dispatch(updateTask(data));
  }, []);

  const handleCurrentItemId = useCallback(
    (id) => {
      setCurrentItemId(id);
    },
    [setCurrentItemId]
  );

  return (
    <div>
      <h1>Task Tracker</h1>

      <Status />

      <Table>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return (
              <TableRow
                data={t}
                key={t.id}
                isEditing={currentItemId === t.id}
                removeTask={onRemoveTask}
                startEditing={() => handleCurrentItemId(t.id)}
                cancelEditing={() => handleCurrentItemId("")}
                confirmEditing={(stateId) => {
                  setCurrentItemId("");
                  updateData({
                    ...t,
                    stateId,
                  });
                }}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan="5">No data</td>
          </tr>
        )}
      </Table>
      <div className="mb-3">
        <Button onClick={() => setShowForm(true)} variant="primary">
          Add new task
        </Button>
      </div>

      {showForm && (
        <Form
          data={states}
          addTask={onAddTask}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateData={updateData}
        />
      )}
    </div>
  );
};

export default TaskTracker;
