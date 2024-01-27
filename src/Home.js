// Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./App.css";

const fetchData = async () => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    console.log('API Response:', response.data);
    return response.data.drinks[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const Home = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => setCocktail(result))
      .catch(() => setCocktail(null));
  }, []);

  return (
    <>
      <div>
        <h3 style={{ color: 'red' }}>Drink of the day</h3>
        {cocktail && (
          <div id="cocktail">
            <h3>{cocktail.strDrink}</h3>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
        )}
      </div>

      <div className="button-container">
        <Link to="/breakfast/BreakfastDetail" className="block glow">Breakfast</Link>
        <Link to="/lunch/LunchDetail" className="block glow">Lunch</Link>
        <Link to="/dinner/DinerDetail" className="block glow">Dinner</Link>
      </div>
    </>
  );
};

export default Home;
