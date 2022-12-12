import React from "react";
import "../Styles/VerifyMall.css";
import { Link } from "react-router-dom";
import Rectangle from "../Image/Rectangle 26.png";

const VerifyMall = () => {
  return (
    <div>
      <form action="" className="verifyMall-form">
        <p className="text1">You're Almost In!</p>
        <h1>Welcome Iretiayo</h1>
        <div>
          <img src={Rectangle} alt="" />
        </div>
        <p className="text2">
          An activation link has been sent to Ireti4tech@gmail.com Please click
          on the link to verify your email and activate your TradExpress
          account.
        </p>
        <button>Sign Up</button>
        <p className="already">Already have an account ? <Link to="/login" className="already1"><span className="span">Click here</span></Link></p>
      </form>
    </div>
  );
};

export default VerifyMall;
