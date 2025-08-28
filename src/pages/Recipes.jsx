import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { useMeals } from '../lib/MealContext ';
import RecipeCard from '../components/RecipeCard';

function Recipes() {

    const [query, setQuery] = useState("cake");

    const { meals, loading, error, searchMeals } = useMeals();

    useEffect(() => {
        if (query) {
            searchMeals(query);
        }
    }, [query]);


    return (
        <div className='min-h-screen'>
            <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 space-y-2 mb-14'>

                <div className='flex flex-col justify-center items-center max-w-2xl text-center space-y-4 py-6'>

                    <h1 className='text-3xl font-medium'>Browse Recipes</h1>

                    <p className='text-gray-500'>Search through our collection of delicious recipes. Find exactly what you're looking for by searching ingredients or dish names.</p>

                    <SearchBar onSearch={setQuery} />
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {(!loading && (!meals || meals.length === 0)) && (
                    <p className='bg-amber-400 p-3 rounded-md'>Meal Not Found!</p>
                )}


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                    {meals.map((meal) => (
                        <div key={meal.idMeal}>
                            <RecipeCard
                                title={meal.strMeal}
                                image={meal.strMealThumb}
                                id={meal.idMeal}
                            />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default Recipes
