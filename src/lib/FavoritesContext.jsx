import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

// Provider Component
export const FavoritesProvider = ({ children }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState(() => {
        const storedFavorites = localStorage.getItem("favoriteRecipes");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    // Sync with localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
    }, [favoriteRecipes]);

    // Toggle favorite: add if not exists, remove if exists
    const toggleFavorite = (meal) => {
        const id = meal.idMeal || meal.id;
        const title = meal.strMeal || meal.title;
        const thumb = meal.strMealThumb || meal.thumb;

        setFavoriteRecipes((prev) => {
            const exists = prev.find((item) => item.id === id);
            if (exists) return prev.filter((item) => item.id !== id);
            else return [...prev, { id, title, thumb }];
        });
    };


    // Check if a recipe is favorite
    const isFavorite = (id) => favoriteRecipes.some((item) => item.id === id);

    return (
        <FavoritesContext.Provider value={{ favoriteRecipes, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Custom hook to use Favorites
export const useFavorites = () => {
    return useContext(FavoritesContext);
};
