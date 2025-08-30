import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { useMeals } from '../lib/MealContext ';
import { useNavigate } from 'react-router'
import { useFavorites } from '../lib/FavoritesContext';

function Featured() {

    const navigate = useNavigate();

    const [query, setQuery] = useState("cake");

    const { meals, loading, error, searchMeals } = useMeals();
    const { toggleFavorite, isFavorite } = useFavorites();

    useEffect(() => {
        if (query) {
            searchMeals(query);
        }
    }, [query]);

    const featMeals = meals.slice(0, 3);

    return (
        <div>
            <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 space-y-2'>

                <div className='text-center space-y-3 max-w-2xl'>
                    <h2 className='text-2xl font-medium'>Featured Recipes</h2>
                    <p className='text-gray-500 text-sm'>Try these popular recipes loved by our community.</p>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">
                    {featMeals.map((meal) => (
                        <div key={meal.idMeal}>
                            <RecipeCard
                                title={meal.strMeal}
                                image={meal.strMealThumb}
                                id={meal.idMeal}
                                addToFavorites={() => toggleFavorite(meal)}
                                isFavorite={isFavorite(meal.idMeal)}
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => navigate('/recipes')}
                    className='text-xs border border-gray-200 rounded-lg shadow cursor-pointer px-3 py-2 mt-6 mb-14 hover:bg-gray-100'
                >View All Recipes</button>

            </section>
        </div>
    )
}

export default Featured
