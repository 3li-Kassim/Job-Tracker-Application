import { useState, useEffect } from "react";
import { ModalComp } from "../Components/modal";
import { JobTable } from "../Components/jobtable";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleShow = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  
  const [isSuccess, setIsSuccess] = useState(false)
  const [jobs, setJobs] = useState([]);
  const [displayMsg, setDisplayMsg] = useState(null);
  const [error, setError] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
 


  const handleEdit = (job) =>{
    setEditingJob(job);
    setModalOpen(true);
  }


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

  const alertColor = isSuccess ? 'alert-success' : 'alert-danger';

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      {displayMsg && 
      <div className={`alert ${alertColor}`}>{displayMsg}</div>}
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
        {modalOpen && <ModalComp editingJob={editingJob} onClose={handleClose} onRefresh={fetchData} />}
      </div>

      <JobTable onRefresh={fetchData} onEdit={handleEdit} getJobs={jobs} onDeleteResult ={(success, message) => {
        setIsSuccess(success);
        setDisplayMsg(message);
      }} />
    </div>
  );
}
