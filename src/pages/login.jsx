import React from "react";
import { useNavigate } from "react-router-dom";
import "../cssonly/login.css";

const Login = () => {
  const navigate = useNavigate();

  const navigateToUserHome = (e) => {
    e.preventDefault(); 
    navigate("/userhome");
  };

  return (
    <>
    <Head/>
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">Login</p>
            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032..." />
              </svg>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3..." />
              </svg>
              <input
                type="password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="btn">
              <button type="button" className="button1" onClick={navigateToUserHome}>
                Login
              </button>
              <button type="button" className="button2">Sign Up</button>
            </div>
            <button type="button" className="button3">Forgot Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

function Head()
{
  return(
  <h1 className="headings">Welcome Dear User</h1>
  )
}



export default Login;
