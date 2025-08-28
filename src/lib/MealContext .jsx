import { createContext, useContext, useState } from "react";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMeals = async (query) => {
    if (!query) {
      setMeals([]); // clear old data when input is empty
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Step 1: Search by meal name
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch meals");
      }

      let result = await res.json();

      if (result.meals) {
        setMeals(result.meals);
      } else {
        // Step 2: Fallback to ingredient search
        res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch meals by ingredient");
        }

        result = await res.json();
        setMeals(result.meals || []); // handle null
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MealContext.Provider value={{ meals, loading, error, searchMeals }}>
      {children}
    </MealContext.Provider>
  );
};

// Custom hook to consume context
export const useMeals = () => useContext(MealContext);
