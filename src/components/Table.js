import React from "react";
import TableRow from "./TableRow";

export const Table = ({ data, states, removeTask, setDataToEdit }) => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Estimate</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, idx) => (
              <TableRow
                key={idx}
                item={item}
                states={states}
                removeTask={removeTask}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
