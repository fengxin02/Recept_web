import React from 'react';
import './RecipeCard.css';
import Tag from '../ui/Tag'; 


/**
 * Displays a summary card for a single recipe.
 * Shows image, title, and category.
 * @param {Object} recipe - The recipe data object.
 * @param {Function} onClick - Handler for when card is clicked.
 */
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={() => onClick(recipe.idMeal)}
      className="recipe-card"
    >
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        className="recipe-image"
      />
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.strMeal}</h3>
        <Tag label={recipe.strCategory} />
      </div>
    </div>
  );
};

export default RecipeCard;