import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import './Home.css';

const Cocktails = () => {
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

  const fetchMultipleDrinks = async () => {
    const drinks = [];
    for (let i = 0; i < 10; i++) {
      try {
        const drink = await fetchData();
        drinks.push(drink);
      } catch (error) {
        console.error('Error fetching drink:', error.message);
      }
    }
    return drinks;
  };

  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMultipleDrinks()
      .then((results) => {
        setCocktails(results);
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
      <h3>Top 10 Drinks</h3>
      {cocktails.map((cocktail, index) => (
        <div key={index} id={`cocktail-${index}`}>
          <h4>{cocktail.strDrink}</h4>
          <p>{cocktail.strInstructions}</p>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      ))}
      <Link to='/' className='block'>
        Main Menu
      </Link>
    </div>
  );
};

export default Cocktails;
