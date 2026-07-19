import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  
  const [emailValue, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [displayMsg, setDisplayMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const alertClass = isSuccess ? "alert-success" : "alert-danger";
  
  const navigate = useNavigate();

  const sendData = async() =>{
    const response = await fetch('/api/login',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({email: emailValue, password: passwordVal})
    })

    if (response.ok){
        setIsSuccess(true);
        navigate('/dashboard');
      }
      else if(response.status === 401){
        setDisplayMsg("Wrong email or password");
        setIsSuccess(false);
      }
      else if(response.status === 400  ){
        setDisplayMsg("Invalid, please try again!");
        setIsSuccess(false);
      }
      else{
        setDisplayMsg("User doesn't exist");
        setIsSuccess(false);
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
                  <h3 className="fw-bold text-white mb-1">Login </h3>
                </div>

                {/* AUTH FORM */}
                <form onSubmit={(e) => {e.preventDefault(); sendData();}}>
                  {displayMsg && <h4 className={`alert text-center ${alertClass}`} >{displayMsg}</h4>}
                  <div className="mb-3">
                    <label className="form-label text-secondary small fw-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={emailValue}
                      onChange={(e)=> setEmailVal(e.target.value)}
                      autoFocus
                      className="form-control bg-dark border-secondary text-white p-3 rounded-3"
                    />
                  </div>

                  <div className="m-0">
                    <label className="form-label text-secondary small fw-medium mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={passwordVal}
                      onChange={(e) => setPasswordVal(e.target.value)}
                      className="form-control bg-dark border-secondary text-white p-3 rounded-3"
                    />
                  </div>

                  <div className="mb-4 ms-1 d-flex justify-content-start">
                  <a href="#" className="text-info small text-decoration-none">Forgot password?</a>
                </div>

                  <button type="submit" className="signing-btn w-100 mb-2 ">
                    Login
                  </button>

                  <div className="text-center">
                    <span className="text-secondary small">
                      Don't have an account?{" "}
                    </span>
                    <Link
                      to="/register"
                      className="text-info small fw-medium text-decoration-none"
                    >
                      Create an account
                    </Link>
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
