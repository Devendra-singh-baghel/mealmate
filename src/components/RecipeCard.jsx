import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";


function RecipeCard({ image, title, id, isFavorite, addToFavorites }) {

    const navigate = useNavigate();

    return (
        <div className='bg-white w-full rounded-xl border border-gray-200 group cursor-pointer overflow-x-clip overflow-y-clip hover:shadow-lg relative'>
            <div className='w-full'>
                {image ? (
                    <img
                        src={image}
                        alt={title ? `${title} Image` : "Recipe Image"}
                        className='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                ) : (
                    <div className="flex justify-center items-center bg-gray-100">
                        <CiImageOn className="text-gray-400 size-48" />
                    </div>
                )}
            </div>

            <div
                onClick={() => addToFavorites(id)}
                className='absolute top-2 right-3 cursor-pointer'
            >
                {isFavorite ?
                    <FaHeart className='size-6 text-red-500' />
                    :
                    <FaRegHeart className='size-6 text-red-500' />
                }
            </div>

            <div className='px-7 pb-7'>
                <h3 className='truncate py-5'>{title}</h3>

                <button
                    type="button"
                    onClick={() => navigate(`/recipes/${id}`)}
                    className='w-full rounded-lg bg-black text-white text-xs py-2.5 cursor-pointer'
                >
                    View Recipe
                </button>
            </div>
        </div >
    )
}

export default RecipeCard
