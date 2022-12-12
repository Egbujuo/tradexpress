import React, { useRef } from "react";
import Easy from "../Image/rafiki.jpg";
import Financial from "../Image/cuate.jpg";
import Investment from "../Image/amico.png";
import "../Styles/Section3.css";
import { useState } from "react";

const Section3 = () => {
  const [data, setData] = useState("See Less");
  const ref1 = useRef();

  return (
    <div className="section3">
      <h1>Why do people get involved with Cryptocurrencies?</h1>
      <div>
        <button
          onClick={() => {
            if (ref1.current.classList.contains("active")) {
              ref1.current.classList.remove("active");
              setData("See Less");
            } else {
              ref1.current.classList.add("active");
              setData("See More");
            }
          }}
        >
          {data}
        </button>
      </div>
      <div ref={ref1} className="box-wrap">
        <div className="easy">
          <div>
            <img src={Easy} alt="" />
          </div>
          <h3>Easy Mode of Payment</h3>
          <p>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="easy">
          <div>
            <img src={Financial} alt="" />
          </div>
          <h3>Financial Freedom</h3>
          <p>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="easy">
          <div>
            <img src={Investment} alt="" />
          </div>
          <h3>Investment</h3>
          <p>
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
