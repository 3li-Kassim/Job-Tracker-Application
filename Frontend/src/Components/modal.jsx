import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export function ModalComp(props){

    const [dateApplied, setDateApplied] = useState(null);
    const [input, setInput] = useState();

    return(
        <div className="modal show" style={{display: 'block', position:'initial'}}>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Company</label>
                        <input className="form-control" type="text" name="company"/>
                        <label>Role</label>
                        <input className="form-control" type="text" name="role"/>
                        <label>Location</label>
                        <input className="form-control" type="text" name="location"/>
                        <label>Job link</label>
                        <input className="form-control" type="text" name="job-link"/>
                        <label>Date Applied</label>
                        <input type="date" className="form-control" name="date-applied"/>
                        <label>Status</label>
                        <select name="status" className="form-select">
                            <option value="0" style={{display:'none'}}></option>
                            <option value="not-applied">Not Applied</option>
                            <option value="Applied">Applied</option>
                        </select>
                        <label>Result</label>
                        <select name="result" className="form-select">
                            <option value="0" disabled style={{display:'none'}}></option>
                            <option value="no-response">No response</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        <label >Feedback Date</label>
                        <input className='form-control' type="date" name="feedback-date"/>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>Close</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
    )
}