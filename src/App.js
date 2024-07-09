import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Predictor from "./pages/predictor";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ?<Navigate to="/predictor" /> : <Login />  } />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/predictor" /> : <Signup />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/predictor"
          element={authUser ? <Navigate to="/predictor" /> : <Predictor />  }
        />
      </Routes>
  );
}

export default App;
