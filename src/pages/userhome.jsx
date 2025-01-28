import React from "react";
import { Link } from "react-router-dom";
import '../cssonly/userhome.css';
function Page() {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to Pregnify </h1>
      <p className="page-description">
        Ashreeya

        </p>  
        <p1 className="page-description"><b> Your Health is Our Top Priority</b></p1>  
    <div className="page-sections">
    <div className="section-card">
      <h2 className="page-title">Pregnancy</h2>

      <p>Find tips, Books and Resources and Baby Names and many more etc</p>

      <a href="#pregnancy" className="section-link">Learn More</a>
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
        <div className="navbar-icons">
          <button className="club-button">Pregnify</button>
        </div>
      </nav>

      
      <Page />
    </>
  );
};

export default Top;
