import { useState } from "react";
import { ModalComp } from "../Components/modal";

export function Dashboard(){
    
    const [modalOpen,setModalOpen] = useState(false);
    
    return(
        <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5">
            <button className="add-btn" onClick={() => setModalOpen(true)}>Add a job</button>
        </div>
        
        {modalOpen &&(
            <ModalComp onClose={() => setModalOpen(false)}/>
        )}
        </div>    
        
        
        
    )
}
