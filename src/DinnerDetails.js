import React from "react";

function DinnerDetails({ DinnerDetails }) {
  return (
    <div className="container">
      {DinnerDetails.map((item) => (
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
    </div>
  );
}
export default DinnerDetails;
