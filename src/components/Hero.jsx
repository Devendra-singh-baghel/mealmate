import React from 'react'
import introImg from '../assets/introImg.jpg'
import { LuChefHat } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router';

function Hero() {

    const navigate = useNavigate();

    return (
        <div className='bg-gradient-to-br from-orange-50 to-red-50'>

            <section className='flex flex-col md:flex-row justify-between gap-7 max-w-[1380px] w-full mx-auto px-4 py-10 md:py-20'>

                <div className='flex flex-col justify-center max-w-2xl w-full space-y-7'>

                    <h1 className='text-5xl max-w-lg'>Discover Amazing Recipes</h1>

                    <p className='text-gray-500 text-lg'>Search thousands of recipes by ingredients, save your favorites, and cook delicious meals with step-by-step instructions.</p>

                    <div className='flex space-x-4'>

                        <button
                            onClick={() => navigate('/recipes')}
                            className='flex items-center gap-3 px-4 py-2 rounded-md bg-black text-white text-sm cursor-pointer'
                        >
                            <FiSearch />
                            Browse Recipes
                        </button>

                        <button
                            onClick={() => navigate('/about')}
                            className='flex items-center gap-3 px-4 py-2 rounded-md bg-white text-black text-sm border border-gray-200 hover:bg-gray-100 duration-300 transition-all cursor-pointer'
                        >
                            <LuChefHat />
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='rounded-lg'>
                    <img
                        src={introImg}
                        alt="image"
                        className='w-full rounded-lg shadow-2xl'
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero
