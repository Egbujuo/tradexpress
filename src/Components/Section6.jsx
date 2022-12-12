import React from "react";
import "../Styles/Section6.css";
import Union from "../Image/Union.png";
import Quote from "../Image/Group 208.png";
import img1 from "../Image/Ellipse 3.png";
import img2 from "../Image/Ellipse 3 (1).png";
import img3 from "../Image/Ellipse 3 (2).png";

const Section6 = () => {
  return (
    <div className="section6">
       <h3>Customer’s Review</h3>
      <div className="cont-wrap">
        <div className="union1">
        <div className="union">
              <img className="quote" src={Quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="union-img" src={Union} alt="" />
          </div>
        
        <div className="ireti">
          <img src={img1} alt="" />
          <div>
            <h1>Ireti</h1>
            <p>Nigeria</p>
          </div>
        </div> 
        </div>
        <div className="union1">
         <div className="union">
              <img className="quote" src={Quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="union-img" src={Union} alt="" />
          </div>
        <div className="ireti">
          <img src={img2} alt="" />
          <div>
            <h1>Bayo</h1>
            <p>USA</p>
          </div>
        </div>
       </div>
        <div className="union1-ng">
          <div className="union">
            <img className="quote" src={Quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="union-img" src={Union} alt="" />
        </div>
        <div className="ireti">
          <img src={img3} alt="" />
          <div>
            <h1>Olagoke</h1>
            <p>Nigeria</p>
          </div>
        </div>  
          </div>    
    </div>
    </div>
  );
};

export default Section6;
