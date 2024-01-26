import React from "react";

function LunchDetails({ LunchDetails }) {
  return (
    <div className="container">
      {LunchDetails.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <video autoPlay width="400" height="300">
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
    </div>
  );
}
export default LunchDetails;
