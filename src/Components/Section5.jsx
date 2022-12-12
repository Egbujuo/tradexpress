import React from 'react'
import Apple from "../Image/Group 119.png";
import googlePlay from "../Image/Group 120.png";
import "../Styles/Section5.css";

const Section5 = () => {
  return (
    <div className='section5'>
        <div className='section5-text'>
            <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h1>Create your account for free and start trading today!</h1>
            <button>Get Started</button>
        </div>
        <div className='section5-img'>
            <img src={Apple} alt="" />
            <img src={googlePlay} alt="" />
        </div>
    </div>
  )
}

export default Section5