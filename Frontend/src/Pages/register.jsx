import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom"


//const signUpBtn;
//need to add a new feature of forget password
// i will have to send an email using flask with a link
// link will have a new page of newpassword and retype new password and it will have to match
export function Register() {
  
  
  const [usernameVal,setUsernameVal] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [displayMsg, setDisplayMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const alertClass = isSuccess ? "alert-success" : "alert-danger"
  const navigate = useNavigate();

  const sendData = async () =>{
      const response = await fetch('/api/register', {
        method: 'POST',
        headers:{ 'Content-Type' : 'application/json'} ,
        body: JSON.stringify({username: usernameVal, email: emailValue, password: passwordVal})
      })
      if (response.ok){
        setDisplayMsg("Account created");
        setIsSuccess(true);
        setTimeout(() =>{
          navigate('/login');
        },2000);
      }
      else{
        setDisplayMsg("User already exists!");
        setIsSuccess(false)
      }
    }
    
  
  
  return (
    <>
  
      <div className="container-fluid min-vh-100 bg-dark text-white d-flex align-items-center justify-content-center position-relative overflow-hidden py-5">
        
      
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5 offset-lg-1">
            <div className="card bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-sm-5 shadow-lg backdrop-blur">
              <div className="text-center mb-4">
                <h3 className="fw-bold text-white mb-1">Create an account</h3>
                
              </div>

              {/* AUTH FORM */}
              <form onSubmit={(e) => {e.preventDefault(); sendData();}}>
                {displayMsg && <h4 className={`alert text-center ${alertClass}`} >{displayMsg}</h4>}
                <div className="mb-3">
                  <label className="form-label text-secondary small fw-medium">Username</label>
                  <input 
                    type="text"
                    name="username"
                    autoFocus
                    value = {usernameVal}
                    onChange={(e) => setUsernameVal(e.target.value)}
                    className="form-control bg-dark border-secondary text-white p-3 rounded-3" 
                    
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary small fw-medium">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    value = {emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    className="form-control bg-dark border-secondary text-white p-3 rounded-3" 
                    
                  />
                </div>
                
                <div className="mb-4 ">
                  <label className="form-label text-secondary small fw-medium mb-0">Password</label>
                  <input 
                    type="password"
                    name="password"
                    value={passwordVal}
                    onChange={(e) => setPasswordVal(e.target.value)}
                    className="form-control bg-dark border-secondary text-white p-3 rounded-3"
                  />
                </div>

                

                <button type="submit"  className="signing-btn w-100 mb-2 ">
                  Sign Up
                </button>

                <div className="text-center">
                  <span className="text-secondary small">Already have an account? </span>
                  <Link to="/login" className="text-info small fw-medium text-decoration-none">Login</Link>
                </div>
              </form>
            </div>
          </div>

        </div>
                </div>
              </div>
              


    </>
  );
}
