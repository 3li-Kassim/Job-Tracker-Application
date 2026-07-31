import { useState } from "react";

export function JobTable(props) {
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      const response = await fetch(`/api/jobs/${id}`, { method: "DELETE" });

      if (response.ok) {
        props.onDeleteResult(true, "Job deleted successfully");
      } else if (response.status === 404) {
        props.onDeleteResult(false, "Failed to delete job");
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
            <th className="py-3 text-center px-4">Action</th>
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
                  {item.feedback_date
                    ? new Date(item.feedback_date).toLocaleDateString()
                    : "—"}
                </td>
                <td className="text-center">
                  <span
                    className={`badge px-3 py-2 rounded-pill ${
                      item.result?.toLowerCase() === "accepted"
                        ? "bg-success bg-opacity-25 text-success border border-success border-opacity-25 text-capitalize"
                        : item.result?.toLowerCase() === "rejected"
                          ? "bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25 text-capitalize"
                          : "bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 text-capitalize"
                    }`}
                  >
                    {item.result || "Pending"}
                  </span>
                </td>
                <td className="text-center">
                  <div className="d-inline-flex align-items-center gap-2">
                    <button className="action-btn edit-btn" title="Edit Job" onClick={() => props.onEdit(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                    </button>
                    <button
                      className="action-btn delete-btn"
                      onClick={() => handleDelete(item.id)}
                      title="Delete Job"
                    >
                      <svg
                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
