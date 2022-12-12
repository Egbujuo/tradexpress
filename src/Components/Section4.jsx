import React from "react";
import Vector from "../Image/Vector.png";
import Cuate from "../Image/cuate.png";
import Vector1 from "../Image/Vector (1).png";
import Rafiki from "../Image/rafiki.png";
import Bitcoin from "../Image/cuate1.png";
import Vector2 from "../Image/Vector (2).png";
import "../Styles/Section4.css";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="text-content">
        <h1>Buy and sell your Cryptocurrency in 3 steps</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          sit ea quis cum. Placeat beatae adipisci praesentium perferendis
          ratione hic dolorum impedit excepturi nulla labore ab expedita dolor
          repellat eligendi reiciendis natus assumenda maxime enim quia
          molestiae dignissimos, vero obcaecati esse.
        </p>
      </div>
      <div className="wrap">
        <div className="vector-cont">
          <div>
            <img src={Vector} alt="" />
          </div>
          <div className="text">
            <h1>Create a free Account</h1>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
        </div>
        <div className="cat">
          <img src={Cuate} alt="" />
         </div>
      </div>
      <div className="wrap2">
        <div className="img-rafiki">
          <img src={Rafiki} alt="" />
        </div>
        <div className="vector2-cont">
        <div className="img-vector">
          <img src={Vector1} alt="" />
        </div>
        <div className="text-conta">
          <h1>Deposit</h1>
          <p>
            Choose your preferred deposit option like bank transfer,
            credit/debit card or send digital asset directly to your wallet for
            easy funding/withdrawal.
          </p>
          </div>
        </div>
      </div>
       <div className="wrap3">
        <div className="vector2-img">
          <img src={Vector2} alt="" />
        </div>
        <div className="text3">
          <h1>Buy/ Sell Crypto</h1>
          <p>
            Sign up for your free TradExpress Wallet on web, iOS, or Android
            devices and follow our easy process to set up your profile.
          </p>
        </div>
        <div className="bitcoin-img">
          <img src={Bitcoin} alt="" />
        </div>
      </div> 
    </div>
  );
};

export default Section4;
