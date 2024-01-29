// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import production from "./images/production.mp4";


const Home = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop id="bgVideo">
          <source src={production} type="video/mp4" />
        </video>
      </div>
      <div className="button-container">
        <Link to="/breakfast/Breakfast" className="block">Breakfast</Link>
        <Link to="/lunch/Lunch" className="block">Lunch</Link>
        <Link to="/dinner/Dinner" className="block">Dinner</Link>
        <Link to="/Coctails" className="block">Coctails</Link> 
      </div>
    </>
  );
};

export default Home;
