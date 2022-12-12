import React from "react";
import {} from "../Styles/Login.css";
import Vector3 from "../Image/Group 152.png";
import {Link  } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form action="" className="loginform">
        <h1>Welcome Back</h1>
        <div className="user">
          <input type="text" placeholder="Username" />
        </div>
        <div className="pass">
          <input type="text" placeholder="Password" />
        </div>
        <div className="remember-pass">
          <div className="remember-p">
            <img src={Vector3} alt="" />
            <p>Remember Password</p>
          </div>
          
         
          <div className="forgot">
            <p>Forgot Password?</p>
          </div>
        </div>
        <button>Log In</button>
        <p className="new-user">
          New User ? <Link to="/getStarted" className="user"><span className="click">Click here</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
