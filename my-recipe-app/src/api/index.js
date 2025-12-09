// url for the api
const API_URL = 'https://www.themealdb.com/api/json/v1/1';


/**
 * Searches for recipes by name using the API.
 * @param {string} term - The search term,like chicken.
 * @returns {Promise<Array>} A list of meals or an empty array if nothing found.
 */
export const searchRecipes = async (term) => {
  try {
    
    const response = await fetch(`${API_URL}/search.php?s=${term}`);
    
    // check network
    if (!response.ok) {
      throw new Error('Network problem');
    }

    // change the result to json
    const data = await response.json();
    
    // if no meals return empty list
    return data.meals || [];
  } catch (error) {
    console.error("Failed to get recipe", error);
    return [];
  }
};


/**
 * Search a recipes details by its ID.
 * @param {string} id -ID of the meal.
 * @returns {Promise<Object|null>} The meal object or null if failed.
 */
export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
    if (!response.ok) throw new Error('Network problem');
    const data = await response.json();
    // API return array only first needed
    return data.meals ? data.meals[0] : null; 
  } catch (error) {
    console.error("Failed to get recipe details", error);
    return null;
  }
};