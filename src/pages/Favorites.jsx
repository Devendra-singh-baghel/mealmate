import React, { useEffect, useState } from 'react'
import { FiSearch, FiHeart } from "react-icons/fi";
import { useNavigate } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import { useFavorites } from '../lib/FavoritesContext';

function Favorites() {

  const navigate = useNavigate();

  const { favoriteRecipes, toggleFavorite } = useFavorites();


  return (
    <div>

      <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 space-y-2 mb-14'>

        <div className='flex flex-col justify-center items-center max-w-xl text-center space-y-4 py-6'>
          <div className='flex items-center gap-2'>
            <FiHeart className='size-7 text-red-600' />
            <h1 className='text-3xl font-medium'>Your Favorite Recipes</h1>
          </div>

          <p className='text-gray-500 text-sm'>Keep track of all the recipes you love. Your favorites are saved locally and will be here whenever you visit.</p>
        </div>

        {(!favoriteRecipes || favoriteRecipes.length === 0) && (
          <div className='flex flex-col items-center text-center space-y-3 w-sm'>
            <FiHeart className='size-20 text-gray-500 mb-7' />
            <span className='text-xl'>No favorite recipes yet</span>

            <p className='text-gray-500 text-sm'>Start exploring our recipe collection and heart the ones you love to see them here!</p>

            <button
              onClick={() => navigate('/recipes')}
              className='flex items-center gap-3 px-3 py-1.5 rounded-md bg-black text-white text-sm cursor-pointer'
            >
              <FiSearch />
              Browse Recipes
            </button>

          </div>
        )}

        {/* Render Recipe Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 w-full">
          {favoriteRecipes.map((meal) => (
            <div key={meal.id}>
              <RecipeCard
                title={meal.title}
                image={meal.thumb}
                id={meal.id}
                addToFavorites={() => toggleFavorite(meal)}
                isFavorite={true} // all items here are favorites
              />
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Favorites
