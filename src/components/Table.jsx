import { useEffect, useState } from "react";
import data from "../db/data";
import Form from "./Form";

const Table = () => {
  const [visitor, setVisitor] = useState(data.visitors);
  const [visitorDeleteIndex, setVisitorDeleteIndex] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <div>
        <h2 className="my-3">VISITOR LIST</h2>
        <button className="btn btn-primary">Add visitor</button>
      </div>
        {success === true ? (
            <div
                class="alert alert-success mt-3"
                role="alert"
            >
                Delete successful! The visitor has been removed from the system.
            </div>
        ) : (
            <></>
        )
    }

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Visitor ID</th>
              <th scope="col">Name</th>
              <th scope="col">Visit Date</th>
              <th scope="col">Inmate Visited</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitor &&
              visitor.map((visitor, index) => (
                <tr key={index}>
                  <td scope="row">{visitor.Id}</td>
                  <td>{visitor.Name}</td>
                  <td>{visitor.VisitDate}</td>
                  <td>{visitor.InmateVisited}</td>
                  <td>
                    <button className="btn btn-warning me-2">Edit</button>
                    {/* <!-- Modal trigger button --> */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modalId"
                      onClick={() => setVisitorDeleteIndex(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Form
        visitorDeleteIndex={visitorDeleteIndex}
        setVisitor={setVisitor}
        visitor={visitor}
        setVisitorDeleteIndex={setVisitorDeleteIndex}
        setSuccess={setSuccess}
      />
    </div>
  );
};
export default Table;
