import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

      <div>
        <button className="button">
          <Link to="/breakfast/BreakfastDetail">Breakfast</Link>
        </button>
        <button className="button">
          <Link to="/lunch/LunchDetail">Lunch</Link>
        </button>
        <button className="button">
          <Link to="/dinner/DinerDetail">Dinner</Link>
        </button>
      </div>
    </>
  );
};
export default Home;