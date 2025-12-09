import React from 'react';
import RecipeList from '../components/recipe/RecipeList';
import { useFavorites } from '../context/FavoritesContext';
import './Favorites.css';



/**
 * Favorites page component.
 * Displays the list of recipes saved by the user.
 * @param {Function} onRecipeClick - Handler to navigate to details.
 */
const Favorites = ({ onRecipeClick }) => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h2 className="favorites-title">Kedvenceim ({favorites.length})</h2>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>Még nincs kedvenc recepted.</p>
          <p>Keress valamit és jelöld meg szívvel! ❤︎</p>
        </div>
      ) : (
        <RecipeList recipes={favorites} onRecipeClick={onRecipeClick} />
      )}
    </div>
  );
};

export default Favorites;