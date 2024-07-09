// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from '../assets/images/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         // Handle successful login, e.g., save token, redirect to another page
//         navigate('/predictor'); // Use navigate instead of history.push
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error);
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="login-container d-flex flex-column align-items-center justify-content-center vh-100">
//       <div className="text-center mb-4">
//         <img src={Logo} alt="Logo" height="72" />
//       </div>
//       <form className="px-4 py-3 text-left" style={{ maxWidth: '300px', width: '100%' }} onSubmit={handleLogin}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <div className="mb-3">
//           <label htmlFor="exampleInputUsername" className="form-label">Username</label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputUsername"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input" id="checkRemember" />
//             <label className="form-check-label" htmlFor="checkRemember">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary btn-block">Sign in</button>
//       </form>
//       <div className="divider mt-4 mb-2"></div>
//       <div className="text-center">
//         <p className="mb-1">New around here? <Link to="/signup">Sign up</Link></p>
//         <p><Link to="/forgotpassword" className="text-muted">Forgot Password?</Link></p>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [verificationKey, setVerificationKey] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forgotPasswordError, setForgotPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        navigate('/predictor');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const sendVerificationKey = async (email) => {
    setLoading(true);
    setForgotPasswordError('');
    try {
      const response = await axios.post('http://localhost:5000/api/password-reset/send-verification-key', { email });
      if (response.data.success) {
        setStep(2);
      } else {
        setForgotPasswordError(response.data.message);
      }
    } catch (error) {
      setForgotPasswordError('Failed to send verification key. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyKey = async (verificationKey) => {
    setLoading(true);
    setForgotPasswordError('');
    try {
      const response = await axios.post('http://localhost:5000/api/password-reset/verify-key', { email, verificationKey });
      if (response.data.success) {
        setStep(3);
      } else {
        setForgotPasswordError(response.data.message);
      }
    } catch (error) {
      setForgotPasswordError('Failed to verify key. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email, verificationKey, newPassword) => {
    setLoading(true);
    setForgotPasswordError('');
    try {
      const response = await axios.post('http://localhost:5000/api/password-reset/reset-password', { email, verificationKey, newPassword });
      if (response.data.success) {
        setStep(4);
      } else {
        setForgotPasswordError(response.data.message);
      }
    } catch (error) {
      setForgotPasswordError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendVerificationKey(email);
    } catch (err) {
      setError('Failed to send verification key. Please try again.');
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      await verifyKey(verificationKey);
    } catch (err) {
      setError('Failed to verify key. Please try again.');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email, verificationKey, newPassword);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
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
        <p><button className="btn btn-link text-muted p-0" onClick={() => setStep(1)}>Forgot Password?</button></p>
      </div>

      {step > 0 && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={() => setStep(0)}></button>
              </div>
              <div className="modal-body">
                {step === 1 && (
                  <form onSubmit={handleForgotPassword}>
                    <h5 className="modal-title mb-3">Forgot Password</h5>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Registered Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                      {loading ? 'Loading...' : 'Next'}
                    </button>
                    {forgotPasswordError && <div className="alert alert-danger mt-3">{forgotPasswordError}</div>}
                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={handleVerification}>
                    <h5 className="modal-title mb-3">Verify Key</h5>
                    <div className="mb-3">
                      <label htmlFor="verificationKey" className="form-label">Enter the 8-digit key sent to your email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="verificationKey"
                        placeholder="Enter verification key"
                        value={verificationKey}
                        onChange={(e) => setVerificationKey(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                      {loading ? 'Loading...' : 'Verify'}
                    </button>
                    {forgotPasswordError && <div className="alert alert-danger mt-3">{forgotPasswordError}</div>}
                  </form>
                )}
                {step === 3 && (
                  <form onSubmit={handlePasswordReset}>
                    <h5 className="modal-title mb-3">Reset Password</h5>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                      {loading ? 'Loading...' : 'Create Password'}
                    </button>
                    {forgotPasswordError && <div className="alert alert-danger mt-3">{forgotPasswordError}</div>}
                  </form>
                )}
                {step === 4 && (
                  <div>
                    <h5 className="modal-title mb-3">Password Reset Successful</h5>
                    <p>Your password has been reset successfully. You can now log in with your new password.</p>
                    <button className="btn btn-primary btn-block" onClick={() => setStep(0)}>Back to Login</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
