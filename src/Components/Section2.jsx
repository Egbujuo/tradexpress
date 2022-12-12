import React from "react";
import {  } from "../Styles/Section2.css";

const Section2 = ({ rate }) => {
  return (
    <div className="section2">
      {rate.map((e) => {
        return (
          <div key={e.id} className="rate"  >
            <div className="rate-wrap">
              <p>{e.name}</p>
              <p>{e.percent_change_24h}</p>
            </div>
            <p>{e.price_usd}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
