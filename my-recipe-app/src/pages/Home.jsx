import React, { useState, useEffect } from 'react';
import RecipeList from '../components/recipe/RecipeList';
import { searchRecipes } from '../api';
import Loading from '../components/ui/Loading';
import './Home.css';


/**
 * Home page component.
 * @param {Function} onRecipeClick - Handler to navigate to details.
 * @param {string} searchRes - The current search term.
 */
const Home = ({ onRecipeClick, searchRes }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await searchRecipes(searchRes);
      setRecipes(data);
      setLoading(false);
    };

    loadData();
  }, [searchRes]); //searchRes change refresh

  return (
    <div>
      {/* Top */}
      <div className="home-container">
        <div className="home-welcome">
          <h2 className="home-title">{searchRes} receptek</h2>
          <p className="home-subtitle">Mit szeretnél ma enni?</p>
        </div>
      </div>
      {/* loading status */}
      {loading ? (
        <Loading />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={onRecipeClick} />
      )}
    </div>
  );
};

export default Home;