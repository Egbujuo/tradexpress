import React from "react";
import {Link  } from "react-router-dom";
import  "../Styles/InstantSell.css";

const InstantSell = () => {
  return (
    <div>
     <form action="" className="instantBuyform">
        <h1>Buy/Sell Instantly</h1>
        <div className="buy-wrap">
          <Link to="/instantBuy" className="buy1">
            Buy
          </Link>
          <button className="sell1">Sell</button>
        </div>
        <div className="coin">
          <p>Coin to Sell==</p>
          <input type="number" placeholder="Bitcoin (BTC)" />
        </div>
        <div className="currency">
          <p>Currency</p>
          <input type="number" placeholder="Naira (NGN)" />
        </div>
        <div className="amount">
          <p>Amount</p>
          <input type="number" placeholder="NGN 3,000,000.00" />
        </div>
        <button className="btnn">Continue</button>
      </form>
    </div>
  );
};

export default InstantSell;
