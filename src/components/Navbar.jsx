import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-xxl ps-5">
        <a href="#intro" className="navbar-brand">
          <div className="w-50">
            <img src={logo} className="img-fluid w-75" alt="" />
          </div>
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
