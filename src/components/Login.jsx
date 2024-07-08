import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Handle successful login, e.g., save token, redirect to another page
        navigate('/predictor'); // Use navigate instead of history.push
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <img src={Logo} alt="Logo" height="72" />
      </div>
      <form className="px-4 py-3 text-left" style={{ maxWidth: '300px', width: '100%' }} onSubmit={handleLogin}>
        {error && <div className="alert alert-danger">{error}</div>}
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
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="checkRemember" />
            <label className="form-check-label" htmlFor="checkRemember">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      </form>
      <div className="divider mt-4 mb-2"></div>
      <div className="text-center">
        <p className="mb-1">New around here? <Link to="/signup">Sign up</Link></p>
        <p><Link to="/forgotpassword" className="text-muted">Forgot Password?</Link></p>
      </div>
    </div>
  );
}

export default Login;
