import React from "react";

const TableRow = ({ item, states, removeTask, setDataToEdit }) => {
  let { id, name, description, estimate, stateId } = item;
  const state =
    states && states.length > 0 ? states.find((st) => st.id === stateId) : "";

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{estimate}</td>
      <td>{state.description}</td>
      <td>
        <button onClick={() => setDataToEdit(item)}>Editar</button>
        <button onClick={() => removeTask(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;
