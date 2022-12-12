import React from "react";
import "../Styles/CopyRight.css";
import Logo from "../Image/Vector (8).png";

const CopyRight = () => {
  return (
    <div className="copyRight">
      <div>
        <img src={Logo} alt="" />
      </div>
      <p>2021 Tradexpress Technologies. All Right Reserved</p>
    </div>
  );
};

export default CopyRight;
