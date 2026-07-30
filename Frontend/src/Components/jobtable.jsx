import { useState } from "react";

export function JobTable(props) {
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const response = await fetch(`/api/jobs/${id}`, { method: "DELETE" });

      if (response.ok) {
        // TODO: prints a message probably gonna send one easier for me to dashbaord 
      }
    } else return;
  };

  return (
    <div className="table-responsive rounded-4 shadow-lg border border-secondary border-opacity-25 bg-dark p-3">
      <table
        className="table table-dark table-hover align-middle mb-0"
        style={{ tableLayout: "fixed" }}
      >
        <thead className="text-secondary  small border-bottom border-secondary border-opacity-50">
          <tr>
            <th className="py-3 text-center">Company</th>
            <th className="py-3 text-center">Role</th>
            <th className="py-3 text-center">Location</th>
            <th className="py-3 text-center">Job Link</th>
            <th className="py-3 text-center">Status</th>
            <th className="py-3 text-center">Applied Date</th>
            <th className="py-3 text-center">Feedback Date</th>
            <th className="py-3 text-center">Result</th>
            <th className="py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="border-top-0">
          {props.getJobs.map((item, i) => {
            return (
              <tr
                className="border-bottom border-secondary border-opacity-10"
                key={item.id}
              >
                <td className="fw-semibold text-white text-center px-3 text-capitalize">
                  {item.company}
                </td>
                <td className="text-info text-center text-capitalize">
                  {item.role}
                </td>
                <td className="text-secondary text-center text-capitalize">
                  {item.location}
                </td>
                <td className="text-center">
                  {item.job_link ? (
                    <a
                      href={item.job_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-info rounded-pill px-3 text-center"
                    >
                      View Link
                    </a>
                  ) : (
                    <span className="text-white small fw-semibold">N/A</span>
                  )}
                </td>
                <td className="text-center text-capitalize">
                  <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 rounded-pill fw-normal text-center">
                    {item.status}
                  </span>
                </td>
                <td className="text-secondary small text-center">
                  {new Date(item.date_applied).toLocaleDateString() || "—"}
                </td>
                <td className="text-secondary small text-center">
                  {item.feedback_date || "—"}
                </td>
                <td className="text-center">
                  <span
                    className={`badge px-3 py-2 rounded-pill ${
                      item.result?.toLowerCase() === "accepted"
                        ? "bg-success bg-opacity-25 text-success border border-success border-opacity-25"
                        : item.result?.toLowerCase() === "rejected"
                          ? "bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25"
                          : "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25"
                    }`}
                  >
                    {item.result || "Pending"}
                  </span>
                </td>
                <td className="text-center">
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
