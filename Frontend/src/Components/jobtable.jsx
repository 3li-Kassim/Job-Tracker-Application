import {useState} from "react";



export function JobTable(props){
    return(
        <div className="table-responsive rounded-4 shadow-lg border border-secondary border-opacity-25 bg-dark p-3">
            <table className="table table-dark table-hover align-middle mb-0" style={{tableLayout: 'fixed'}}>
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
            </tr>
            </thead>
            <tbody className="border-top-0">
            {props.getJobs.map((item,i) =>{
                return(<tr className="border-bottom border-secondary border-opacity-10" key={item.id}>
                    <td className="fw-semibold text-white px-3">{item.company}</td>
                    <td className="text-info">{item.role}</td>
                    <td className="text-secondary">{item.location}</td>
                    <td>
                    {item.job_link ? (
                    <a 
                    href={item.job_link}
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-sm btn-outline-info rounded-pill px-3">
                    View Link</a>) : 
                    (<span className="text-muted small">N/A</span>)}
                    </td>
                    <td>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 rounded-pill fw-normal">
                    {item.status}
                    </span>
                    </td>
                    <td className="text-secondary small">{item.date_applied || "—"}</td>
                    <td className="text-secondary small">{item.feedback_date || "—"}</td>
                    <td>  
                    <span className={`badge px-3 py-2 rounded-pill ${
                    item.result?.toLowerCase() === 'accepted' ? 'bg-success bg-opacity-25 text-success border border-success border-opacity-25' :
                    item.result?.toLowerCase() === 'rejected' ? 'bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25' :
                    'bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25'
                    }`}>
                    {item.result || "Pending"}
                    </span>
                    </td>
                  
                </tr>
            );
            })}
            </tbody>
        </table>
        </div>
        
    )

}
