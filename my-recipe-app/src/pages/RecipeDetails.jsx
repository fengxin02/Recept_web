import React, { useState, useEffect } from 'react';
import { getRecipeById } from '../api';
import { useFavorites } from '../context/FavoritesContext';
import './RecipeDetails.css';
import Tag from '../components/ui/Tag';
import ErrorMessage from '../components/ui/ErrorMessage';
import IngredientsList from '../components/recipe/IngredientsList';
import Instructions from '../components/recipe/Instruction';
import Loading from '../components/ui/Loading';


/**
 * Page displaying detailed information about a specific recipe.
 * Includes ingredients, instructions, and favorite toggle.
 * @param {string} id - The ID of the recipe to display.
 * @param {Function} onBack - Handler to go back to the previous page.
 */
const RecipeDetails = ({ id, onBack }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const loadRecipe = async () => {
      setLoading(true);
      const data = await getRecipeById(id);
      setRecipe(data);
      setLoading(false);
    };

    if (id) {
      loadRecipe();
    }
  }, [id]);

  //change the api form to array
  /**
   * Helper to extract and format ingredients from the API response object.
   * @param {Object} meal - The meal object from API.
   * @returns {string[]} Array of formatted ingredient strings.
   */
  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  if (loading) return <Loading />
  if (!recipe) return <ErrorMessage message="Nem Talált" />;

  const isFav = isFavorite(recipe.idMeal);
  return (
    <div className="details-container">
      {/*back button*/}
      <div className="details-header">
        <button onClick={onBack} className="back-btn">← Vissza</button>
      </div>

      {/* picture*/}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="details-img" />

      {/* title */}
      <div className="details-title-row">
        <h1 className="details-title">{recipe.strMeal}</h1>

        <button
          className={`fav-btn-large ${isFav ? 'active' : ''}`}
          onClick={() => toggleFavorite(recipe)}
        >
          ❤︎
        </button>

      </div>

      <div className="details-info">
        <Tag label={`Kategória: ${recipe.strCategory}`} />
        <Tag label={`Származás: ${recipe.strArea}`} />
      </div>

      <h3 className="details-section-title">Alapanyagok</h3>
      <IngredientsList ingredients={getIngredients(recipe)} />

      <h3 className="details-section-title">Elkészítés</h3>
      <Instructions text={recipe.strInstructions} />
    </div>
  );
};

export default RecipeDetails;