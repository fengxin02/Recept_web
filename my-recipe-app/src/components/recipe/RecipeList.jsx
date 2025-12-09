import React from 'react';
import RecipeCard from './RecipeCard';
import ErrorMessage from '../ui/ErrorMessage';
import './RecipeList.css';

/**
 * Renders a grid of RecipeCard components.
 * @param {Array} recipes - List of recipe.
 * @param {Function} onRecipeClick - When you click on the recipe.
 */
const RecipeList = ({ recipes, onRecipeClick }) => {
  if (!recipes || recipes.length === 0) {
    return <ErrorMessage message="Nincs keresett recept...éhessss..." />;
  }

  return (
    <div className="recipe-list-grid">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.idMeal} 
          recipe={recipe} 
          onClick={onRecipeClick} 
        />
      ))}
    </div>
  );
};

export default RecipeList;