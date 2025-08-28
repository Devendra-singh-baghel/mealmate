import React from 'react'
import { useNavigate } from 'react-router'

function RecipeCard({ image, title, id }) {

    const navigate = useNavigate();

    return (
        <div className='bg-white w-full max-w-md rounded-xl border border-gray-200 group cursor-pointer overflow-x-clip overflow-y-clip hover:shadow-lg'>
            <div className='w-full'>
                <img
                    src={image}
                    alt="Recipe Image"
                    className='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300'
                />
            </div>

            <div className='px-7 pb-7'>
                <h3 className='truncate py-5'>{title}</h3>

                <button
                    type="button"
                    onClick={() => navigate(`/recipes/${id}`)}
                    className='w-full rounded-lg bg-black text-white text-xs py-2.5 cursor-pointer'
                >View Recipe</button>
            </div>
        </div>
    )
}

export default RecipeCard
