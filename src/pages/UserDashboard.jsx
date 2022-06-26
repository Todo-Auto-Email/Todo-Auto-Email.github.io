import React from "react";
import Table from "react-bootstrap/Table";
export default function UserDashboard() {
  return (
    <div>
      <div className="container">
        <h1>Event List</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Start Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Event1</td>
              <td>11-09-2022</td>
              <td>
                <button>Subscribe</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Event2</td>
              <td>11-09-2022</td>
              <td>
                <button>Subscribe</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Event3</td>
              <td>11-09-2022</td>
              <td>
                <button>Subscribe</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
