import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import './Home.css';

const Coctails = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      console.log('API Response:', response.data);
      return response.data.drinks[0];
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };

  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setCocktail(result);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className='page-container'>
      <h3>Drink of the day</h3>
      {cocktail && (
        <div id='cocktail'>
          <h4>{cocktail.strDrink}</h4>
          <p>{cocktail.strInstructions}</p>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      )}
      <Link to='/' className='block'>
        Main Menu
      </Link>
    </div>
  );
};

export default Coctails;
