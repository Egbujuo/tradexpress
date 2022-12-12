import React from "react";
import { Link } from "react-router-dom";
import {  } from "../Styles/InstantBuy.css";

const InstantBuy = () => {
  return (
    <div>
      <form action="" className="instantBuyform">
        <h1>Buy/Sell Instantly</h1>
        <div className="buy-wrap">
          <button className="buy">Buy</button>
          <Link to="/instantSell" className="sell">
            Sell
          </Link>
        </div>
        <div className="coin">
          <p>Coin to buy</p>
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

export default InstantBuy;
