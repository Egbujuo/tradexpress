import React from 'react'
import "../Styles/Footer.css";
import Twitter from "../Image/Vector (4).png";
import Telegram from "../Image/Vector (5).png";
import Whatsapp from "../Image/Vector (6).png";
import Facebook from "../Image/Vector (7).png";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='product'>
            <p className='p'>Products</p>
            <br />
            <p>Bitcoin</p>
            <p>Flat</p>
            <p>Refill</p>
            <p>P2P</p>
        </div>
        <br />
        <div>
            <p className='p'>Learn</p>
            <br />
            <p>Blog</p>
            <p>Help Center</p>
        </div>
        <br />
        <div>
            <p className='p'>Contact</p>
            <br />
            <p>hello@tradexpress.com</p>
            <p>support@tradexpress.com</p>
            <div>
            <img src={Twitter} alt="" />
            <img src={Telegram} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Facebook} alt="" />
          </div>
        </div>
        <br />
        <div>
            <p className='p'>Company</p>
            <br />
            <p>About Us</p>
            <p>Careers</p>
            <p>Rates</p>
            <p>Mobile</p>
        </div>
        <br />
        <div>
            <p className='p'>Legal</p>
            <br />
            <p>Privacy Policy</p>
            <p>Anti-Money Laundering</p>
            <p>Terms and Conditions</p>
        </div>
    </div>
   
  )
}

export default Footer