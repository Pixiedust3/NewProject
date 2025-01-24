import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/userhome";
import AboutUs from "./pages/AboutUs"; // Import the About Us component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/about" element={<AboutUs />} />  {/* Add About Us route */}
      </Routes>
    </Router>
  );
};

export default App;
