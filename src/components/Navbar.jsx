import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light p-2 px-sm-5 px-xxl-0">
      <div className="container-xxl">
        <a href="#intro" className="navbar-brand">
          <img src={logo} className="img-fluid" style={{ width: "180px" }} />
        </a>
        {/* toggle button for mobile nav */}
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
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item ms-2 d-none d-md-inline">
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
