import { Link } from "react-router-dom";

export function Main() {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-white d-flex align-items-center position-relative overflow-hidden">
    
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center g-5">
         
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-3 fw-extrabold tracking-tight mb-3 lh-sm">
              Stop losing track of your{" "}
              <span className="text-info">job applications.</span>
            </h1>
            <p className="lead text-secondary fs-4 mb-4">
              The minimalist dashboard built for developers and professionals to
              organize interviews, track salaries, and manage the interview
              pipeline without messy spreadsheets.
            </p>

           
            <div className="row g-3 pt-3 justify-content-center justify-content-lg-start text-start">
              <div className="col-auto me-4">
                <h4 className="fw-bold text-white mb-0">100%</h4>
                <small className="text-secondary">Free & Open Source</small>
              </div>
              <div className="col-auto">
                <h4 className="fw-bold text-white mb-0">Local</h4>
                <small className="text-secondary">Flask + React Stack</small>
              </div>
            </div>
          </div>

      
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className="card bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 p-sm-5 shadow-lg backdrop-blur">
              <div className="text-center mb-4">
                <h3 className="fw-bold text-white mb-1">
                  Welcome to JobTracker
                </h3>
                <p className="text-secondary small">
                  Sign in or create an account to start tracking
                </p>
              </div>

            <div className="d-flex align-items-center justify-content-between gap-2">
                <Link to="/register" className="flex-fill text-decoration-none">
                <button className="signing-btn w-100 m-0">Sign Up</button>
                </Link>
                <Link to="/login" className="flex-fill text-decoration-none">
                <button className="signing-btn w-100 m-0">Login</button>
                </Link>
                
            </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
