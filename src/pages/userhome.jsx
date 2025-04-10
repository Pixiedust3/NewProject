import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../cssonly/userhome.css"; 

function Page() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login"); 
  };

  const navigateToDoctorLogin = () => {
    navigate("/doctorlogin");
  };

  const navigateToRes = () => {
    navigate("/resources");
  };

  const navigateToRegisterLogin = () => {
    navigate("/userregister");  // ✅ Route to RegisterLogin page
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
            <button className="club-button" onClick={navigateToRes}>
              Resources
            </button>
            <button className="club-button" onClick={navigateToRegisterLogin}>
              Test
            </button> {/* ✅ Now correctly routes to RegisterLogin */}
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
          <li><Link to="/pregnancy">Pregnancy</Link></li>
          <li><Link to="/baby">Baby</Link></li>
          <li><Link to="/parenting">Parenting</Link></li>
          <li><Link to="/doctor">Doctor</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <div className="navbar-icons"></div>
      </nav>
      <Page />
    </>
  );
};

export default Top;
