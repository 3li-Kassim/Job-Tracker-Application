import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom w-100 px-3 d-flex ">
      <a href="/" className="navbar-brand ">
        Job Tracker
      </a>
      <li className="ms-auto">
        <Link to="/register">
          <button className="sign-btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="sign-btn">Login</button>
        </Link>
      </li>
    </nav>
  );
}
