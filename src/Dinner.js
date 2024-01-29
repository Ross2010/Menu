import React from "react";
import { Link } from "react-router-dom";

function Dinner({ Dinner }) {
  return (
    <div className="page-container">
      {Dinner.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <video className="vid"  autoPlay width="400" height="300">
            <source src={item.src} type="video/mp4" />
          </video>
          <p>
            {item.facts.map((fact, index) => (
              <p key={index}>{fact}</p>
            ))}
          </p>
          <p>$ {item.price}</p>
        </div>
      ))}
      <Link to="/" className="block">Main Menu</Link>
    </div>
  );
}
export default Dinner;
