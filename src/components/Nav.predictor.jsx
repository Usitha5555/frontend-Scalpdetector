import React from "react";
import logo from "../assets/images/logo.png";
import {Link} from 'react-router-dom'
// import logout from '../hooks/useLogout'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light p-2 px-sm-5 px-xxl-0">
      <div className="container-xxl">
        <a href="#intro" className="navbar-brand">
          <img src={logo} className="img-fluid" style={{ width: "180px" }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* navbar links */}
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link  to="/" className="btn btn-primary">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
