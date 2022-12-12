import React from "react";
import "../Styles/GetStarted2.css";
import { Link } from "react-router-dom";

const GetStarted2 = () => {
  return (
    <div className="wrap">
      <form action="" className="getstartedform">
        <h1>Welcome</h1>
        <div className="button-bg">
          <Link to="/getStarted" className="individual2">
            Individual
          </Link>
          <button className="business2">Business</button>
        </div>
        <div className="inputs">
          <div>
            <input className="inp1" type="text" placeholder="Username" />
          </div>
          <div>
            <input className="inp1" type="text" placeholder="Business Name" />
          </div>
          <div>
            <input className="inp1" type="text" placeholder="Email" />
          </div>
          <div>
            <input className="inp1" type="text" placeholder="Phone Nmber" />
          </div>
          <div>
            <input
              className="inp1"
              type="text"
              placeholder="Referral Code (optional)"
            />
          </div>
        </div>

        <p className="p">
          By clicking the Sign Up button below, you agree to TradExpress{" "}
          <span className="span">terms and service</span>
        </p>
        <button className="btn2">Sign Up</button>
        <p className="p1">
          Already have an account ? <Link to="/login" className="log"><span className="span">Click here</span></Link>
        </p>
      </form>
    </div>
  );
};

export default GetStarted2;
