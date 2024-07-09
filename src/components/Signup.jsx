import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setValidationErrors([]); 

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        navigate('/predictor'); 
      }
    } catch (err) {
      if (err.response && err.response.data) {
        if (err.response.data.errors) {
          setValidationErrors(err.response.data.errors);
        } else if (err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <img src={Logo} alt="Logo" height="72" />
      </div>
      <form className="px-4 py-3 text-left" style={{ maxWidth: '300px', width: '100%' }} onSubmit={handleSignup}>
        {error && <div className="alert alert-danger">{error}</div>}
        {validationErrors.length > 0 && (
          <div className="alert alert-danger">
            {validationErrors.map((err, index) => (
              <div key={index}>{err.msg}</div>
            ))}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
      </form>
      <div className="divider mt-4 mb-2"></div>
      <div className="text-center">
        <p className="mb-1">Already have an account? <Link to="/login">Sign in</Link></p>
        <p><Link to="/" className="btn btn-link text-muted p-0">Go Back to Home</Link></p>
      </div>
    </div>
  );
}

export default Signup;
