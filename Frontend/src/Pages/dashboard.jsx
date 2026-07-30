import { useState, useEffect } from "react";
import { ModalComp } from "../Components/modal";
import { JobTable } from "../Components/jobtable";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleShow = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [jobs, setJobs] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setJobs(result);
      } catch (err) {
        console.error("Failed to fetch jobs: ", err.message);
        setError("Failed to load jobs. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-white mb-0">My Job Applications</h2>
          <p className="text-secondary small mb-0">
            Track and manage your job search progress
          </p>
        </div>

        <button className="add-btn job-btn" onClick={handleShow}>
          + Add Job
        </button>
        {modalOpen && <ModalComp onClose={handleClose} />}
      </div>

      <JobTable getJobs={jobs} />
    </div>
  );
}
