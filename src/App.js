import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Predictor from "./pages/predictor"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/predictor" element={<Predictor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
