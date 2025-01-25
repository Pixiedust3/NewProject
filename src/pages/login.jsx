import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateToUserHome = () => {
    navigate("/userhome");
  };

  return (
    <div className="visit-container">
    <h1 className="heading">Visit Our Page Pregnify</h1>
    <button className="visit-button" onClick={navigateToUserHome}>
      Visit
    </button>
  </div>
  );
};

export default Login;
