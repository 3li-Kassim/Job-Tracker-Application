import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export function ModalComp(props){

    

    const [formData, setFormData] = useState({
            company: '',
            role: '',
            location:'',
            jobLink:'',
            status:'',
            result:'',
            dateApplied:'',
            feedbackDate:''

        });

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        setFormData(prevData =>({
            ...prevData,
            [name]: value
        }));
    }

    return(
        <div className="modal show" style={{display: 'block', position:'initial'}}>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                        <label>Company</label>
                        <input className="form-control" type="text" name="company" value={formData.company} onChange={handleInputChange} />
                        </div>
                        
                        <div className="mb-3">
                        <label>Role</label>
                        <input className="form-control" type="text" name="role" value={formData.role} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="mb-3">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" value={formData.location} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="mb-3">
                        <label>Job link</label>
                        <input className="form-control" type="text" name="jobLink" value={formData.jobLink} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="mb-3">
                        <label>Date Applied</label>
                        <input type="date" className="form-control" name="dateApplied" value={formData.dateApplied} onChange={handleInputChange}/>
                        </div>

                        <div className="mb-3">
                        <label>Status</label>
                        <select name="status" className="form-select" value={formData.status} onChange={handleInputChange}>
                            <option value="0" style={{display:'none'}}></option>
                            <option value="not-applied">Not Applied</option>
                            <option value="Applied">Applied</option>
                        </select>
                        </div>
                        
                        <div className="mb-3">
                        <label>Result</label>
                        <select name="result" className="form-select" value={formData.result} onChange={handleInputChange}>
                            <option value="" disabled style={{display:'none'}}></option>
                            <option value="no-response">No response</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        </div>

                        <div className="mb-3">
                        <label >Feedback Date</label>
                        <input className='form-control' type="date" name="feedbackDate" value={formData.feedbackDate} onChange={handleInputChange}/>
                        </div>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
    )
}