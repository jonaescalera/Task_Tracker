import React from "react";
import useSummarize from "./useSummarize";
import Table from "react-bootstrap/Table";

const Status = () => {
  const totalStatusDate = useSummarize();
  //console.log(x);
  return (
    <div>
      <Table size="sm">
        <thead>
          <tr>
            <th>State</th>
            <th>Total hours</th>
          </tr>
        </thead>
        <tbody>
          {totalStatusDate.map((item, idx) => {
            return (
              <tr>
                <td>{item.state}</td>
                <td>{item.sum}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Status;
