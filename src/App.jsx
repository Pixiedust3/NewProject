import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/userhome";
import AboutUs from "./pages/aboutus";
import DoctorModule from "./pages/doctorlogin";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /userhome */}
        <Route path="/" element={<Navigate to="/userhome" replace />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/doctorlogin" element={<DoctorModule />} />

        
      </Routes>
    </Router>
  );
};

export default App;