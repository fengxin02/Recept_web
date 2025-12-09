import React, { createContext, useState, useEffect, useContext } from 'react';


const FavoritesContext = createContext();

/**
 * Context Provider for managing favorite recipes.
 * Handles state and synchronization with Local Storage.
 * @param {React} children - child.
 */
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // check if theres any thing in local storage
  useEffect(() => {
    const storedFavs = localStorage.getItem('myRecipeFavorites');
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  /**
   * Adds or removes a recipe from the favorites list.
   * Updates both state and Local Storage.
   * @param {Object} recipe - The recipe object to toggle.
   */
  const toggleFavorite = (recipe) => {
    // check if it is alrd in fav
    const isAlreadyFav = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    let newFavorites;
    if (isAlreadyFav) {
      // if exist remove with filtering it
      newFavorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
    } else {
      // add into fav
      newFavorites = [...favorites, recipe];
    }

    setFavorites(newFavorites);
    // save into local storage
    localStorage.setItem('myRecipeFavorites', JSON.stringify(newFavorites));
  };



/**
   * Checks if a specific recipe is currently in favorites.
   * @param {string} id - The ID of the recipe.
   * @returns {boolean} True if favorite, false otherwise.
   */
  const isFavorite = (id) => {
    return favorites.some((fav) => fav.idMeal === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Custom hook to access favorites data and actions.
 * @returns {Object} The favorites context value.
 */
export const useFavorites = () => useContext(FavoritesContext);