import React from 'react'
import { FiSearch, FiHeart } from "react-icons/fi";
import { useNavigate } from 'react-router';


function Favorites() {

  const navigate = useNavigate();

  return (
    <div>

      <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-20'>

        <div className='space-y-3 flex flex-col items-center text-center max-w-xl'>
          <div className='flex items-center gap-2'>
            <FiHeart className='size-7 text-red-600' />
            <h1 className='text-3xl font-medium'>Your Favorite Recipes</h1>
          </div>

          <p className='text-gray-500 text-sm'>Keep track of all the recipes you love. Your favorites are saved locally and will be here whenever you visit.</p>
        </div>

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
      </section>
    </div>
  )
}

export default Favorites
