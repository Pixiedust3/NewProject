import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../cssonly/userhome.css"; // Import CSS

function Page() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const navigateToLogin = () => {
    navigate("/login"); // Navigate to the login route
  };

  const navigateToDoctorLogin = () => {
    navigate("/doctorlogin"); // Navigate to the doctor login route
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="page-title">Welcome to Pregnify</h1>
        <p className="page-description">
          <b>Your Health is Our Top Priority</b>
        </p>
      </header>

      {/* Features Section */}
      <div className="page-sections">
        <div className="section-card">
          <h2 className="section-title">Pregnancy</h2>
          <p>Find tips, books, resources, baby names, and much more!</p>
          <div className="buttons-container">
            <button className="club-button" onClick={navigateToLogin}>
              User Login Page
            </button>
            <button className="club-button" onClick={navigateToDoctorLogin}>
              Doctor Login Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Top = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#pregnancy">Pregnancy</a></li>
          <li><a href="#baby">Baby</a></li>
          <li><a href="#parenting">Parenting</a></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <div className="navbar-icons"></div>
      </nav>
      <Page />
    </>
  );
};

export default Top;
