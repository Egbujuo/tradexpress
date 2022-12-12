import React from 'react'
import GooglePlay from "../Image/Group 69.png";
import Apple from "../Image/Group 68@2x.png";
import "../Styles/Section1.css";

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='content'>
        <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
        <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
        <button>Get Started</button>
        <div className='icons'>
            <img src={GooglePlay} alt="" />
            <img src={Apple} alt="" />
        </div>
        </div> 
        
    </div>
  )
}

export default Section1