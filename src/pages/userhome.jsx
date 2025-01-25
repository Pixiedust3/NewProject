import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
  
      <li><a href="#pregnancy ">Pregnancy </a></li>
      <li><a href="#baby">Baby</a></li>
      <li><a href="#parenting">Parenting </a></li>
          <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="navbar-icons">
        <button className="club-button">Pregnify</button>
      </div>
    </nav>
  );
};

export default Top;
