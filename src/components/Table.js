import React from "react";
import Table from "react-bootstrap/Table";

export const TableCrud = ({ children }) => {
  return (
    <Table size="sm" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Estimate</th>
          <th>State</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default TableCrud;
