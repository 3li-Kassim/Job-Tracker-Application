import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export function ModalComp(props) {
  const [formData, setFormData] = useState(props.editingJob || {
    company: "",
    role: "",
    location: "",
    jobLink: "",
    status: "",
    result: "",
    dateApplied: "",
    feedbackDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [displayMsg, setDisplayMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const alert = isSuccess ? "alert-success" : "alert-danger";

  const sendForm = async () => {
    if(props.editingJob){
      const response = await fetch(`/api/jobs/${props.editingJob.id}`,{
        method:"PATCH",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(formData),
      });

      if(response.ok){
        setIsSuccess(true);
        setDisplayMsg("Job Application Updated");

      }
      else if(response.status === 400){
        setIsSuccess(false);
        setDisplayMsg("Please fill all the required fields!");
      }
      else{
        setIsSuccess(false);
        setDisplayMsg("Failed, please try again later!");
      }
    }
    else{
    if (
      formData.company === "" ||
      formData.role === "" ||
      formData.location === "" ||
      formData.status === "" ||
      formData.dateApplied === ""
    ) {
      setIsSuccess(false);
      setDisplayMsg("Please fill all the required fields!");
    } else {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setDisplayMsg("Job Application Added");
      } else if (response.status == 400) {
        setIsSuccess(false);
        setDisplayMsg("Please fill all the required fields!");
      }
    }
  }
  };

  return (
    <div
      className="modal show mt-5"
      style={{ display: "block", position: "fixed" }}
    >
      <Modal show={true} onHide={props.onClose} centered>
        <Modal.Header>
          <Modal.Title className="fw-bold ">Add Job Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {displayMsg && (
            <h4 className={`alert ${alert} text-center`}>{displayMsg}</h4>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendForm();
            }}
          >
            <div className="row g-3">
              <div className="mb-3 col-md-6">
                <label className="required">Company</label>
                <input
                  className="form-control"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="required">Role</label>
                <input
                  className="form-control"
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="required">Location</label>
              <input
                className="form-control"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label>Job link</label>
              <input
                className="form-control"
                type="text"
                name="jobLink"
                value={formData.jobLink}
                onChange={handleInputChange}
              />
            </div>

            <div className="row g-3">
              <div className="mb-3 col-md-6">
                <label className="required">Status</label>
                <select
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="0" style={{ display: "none" }}>
                    Select
                  </option>
                  <option value="not-applied">Not Applied</option>
                  <option value="Applied">Applied</option>
                </select>
              </div>

              <div className="mb-3 col-md-6">
                <label className="required">Date Applied</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateApplied"
                  value={formData.dateApplied}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="mb-3 col-md-6">
                <label>Result</label>
                <select
                  name="result"
                  className="form-select"
                  value={formData.result}
                  onChange={handleInputChange}
                >
                  <option value="" disabled style={{ display: "none" }}>
                    Select
                  </option>
                  <option value="no-response">No response</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                </select>
              </div>

              <div className="mb-4 col-md-6">
                <label>Feedback Date</label>
                <input
                  className="form-control"
                  type="date"
                  name="feedbackDate"
                  value={formData.feedbackDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Button type="submit" className="signing-btn w-100 ">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
