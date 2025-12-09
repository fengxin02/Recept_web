import React from 'react';



/**
 * Renders the list of ingredients.
 * @param {string[]} ingredients - Array of ingredient strings.
 */
const IngredientsList = ({ ingredients }) => {
  return (
    <ul className="ingredients-list">
      {ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default IngredientsList;