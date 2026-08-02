import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/current_user");
      const data = await response.json();
      setUser(data.loggedIn ? data : null);
    };
    checkAuth();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async() => {
    const response = await fetch("/api/logout");
    if (response.ok){
      setUser(null);
      navigate('/login');
    }
  }

  return (
    <nav className="navbar navbar-dark bg-dark border-bottom w-100 px-3 d-flex ">
      <a href="/" className="navbar-brand ">
        Job Tracker
      </a>
      {user ? (
        <li className="ms-auto">
           <button className="sign-btn" onClick={handleLogout}>Logout</button>
        </li>
       
      ): (
        <>
         <li className="ms-auto">
          <Link to="/register">
            <button className="sign-btn">Register</button>
          </Link>
          <Link to="/login">
            <button className="sign-btn">Login</button>
          </Link>
        </li>
        </>
      )}
    </nav>
  );
}
