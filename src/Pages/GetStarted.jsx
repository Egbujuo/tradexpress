import React from "react";
import "../Styles/Getstarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="wrap">
      <form action="" className="getstartedform">
      <h1>Welcome</h1>
      <div className="button-bg">
        <button className="individual">Individual</button>
        <Link to="/getStarted2" className="business">
          Business
        </Link>
      </div>
      <div className="inputs">
        <div>
          <input className="inp1" type="text" placeholder="Username" />
        </div>
        <div>
          <input className="inp1" type="text" placeholder="Full Name" />
        </div>
        <div>
          <input className="inp1" type="text" placeholder="Email" />
        </div>
        <div>
          <input className="inp1" type="text" placeholder="Phone Nmber" />
        </div>
        <div>
          <input className="inp1" type="text" placeholder="Referral Code (optional)" />
        </div>
      </div>
      
      <p className="p">
        By clicking the Sign Up button below, you agree to TradExpress{" "}
        <span className="span">terms and service</span>
      </p>
      <Link to="/verifyMall">
      <button className="btn2">Sign Up</button>
      </Link>
      <p className="p1">
        Already have an account ? <Link to="/login" className="log"><span className="span">Click here</span></Link>
      </p>
      </form>  
    </div>
  );
};

export default GetStarted;
