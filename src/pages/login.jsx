import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateToUserHome = () => {
    navigate("/userhome");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={navigateToUserHome}>User</button>
    </div>
  );
};

export default Login;
