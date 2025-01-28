import React from "react";
import { useNavigate } from "react-router-dom";
import "../cssonly/userhome.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  const navigateToUserHome = () => {
    navigate("/userhome");
  };

  return (
    <>
      <header></header> 
      <button className="visit-button" onClick={navigateToUserHome}>
        User login portal
      </button>
    </>
  );
};

export default Login;
