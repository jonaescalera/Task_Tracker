import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import states from "./constants";
import { BsCheckCircle } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const TableRow = ({
  data,
  isEditing,
  removeTask,
  startEditing,
  cancelEditing,
  confirmEditing,
}) => {
  const { id, name, description, estimate, stateId } = data;
  const state = states.find((st) => st.id === stateId);
  const [currentStateId, setCurrentStateId] = useState(stateId);

  const handleCurrentStateId = useCallback(
    (value) => {
      console.log(value);
      setCurrentStateId(value);
    },
    [setCurrentStateId]
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{estimate}</td>
      <td>
        {isEditing ? (
          <form
            onSubmit={(event) => {
              confirmEditing(currentStateId);
              event.preventDefault();
            }}
          >
            <select
              value={currentStateId}
              name="stateId"
              onChange={(event) => handleCurrentStateId(event.target.value)}
            >
              {states.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              ))}
            </select>
            <button type="submit">
              <BsCheckCircle />
            </button>

            <button onClick={cancelEditing}>
              <MdOutlineCancel />
            </button>
          </form>
        ) : (
          <label onClick={startEditing} style={{ cursor: "pointer" }}>
            {state?.description}
          </label>
        )}
      </td>

      <td>
        {
          <Button variant="secondary" onClick={() => removeTask(id)}>
            Delete
          </Button>
        }
      </td>
    </tr>
  );
};

export default TableRow;
