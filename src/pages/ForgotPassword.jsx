import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png'; 

function ForgotPassword() {
  return (
    <div className="forgot-password-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <img src={Logo} alt="Logo" height="72" />
      </div>
      <form className="px-4 py-3 text-left" style={{ maxWidth: '300px', width: '100%' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter your email" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
      <div className="divider mt-4 mb-2"></div>
      <div className="text-center">
        <p className="mb-1">Go to <Link to="/">Home</Link></p>
        <p>Remembered your password?<Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
