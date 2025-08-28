import React from 'react'
import { FiSearch, FiHeart } from "react-icons/fi";
import { LuChefHat } from "react-icons/lu";

function WhyMealMate() {
    return (
        <div>
            <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-2'>

                <div className='text-center space-y-3 max-w-xl'>
                    <h2 className='text-2xl font-medium'>Why Choose MealMate?</h2>

                    <p className='text-gray-500 text-sm'>We make cooking easier and more enjoyable with our comprehensive recipe database and user-friendly features.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                    <div className='border border-gray-200 rounded-xl p-6 text-center space-y-4'>
                        <div className='bg-gray-200 inline-block p-3 rounded-md'>
                            <FiSearch size={20} />
                        </div>

                        <h3 className=''>Smart Search</h3>

                        <p className='text-xs text-gray-500'>Find recipes by ingredients you have at home or search by dish name.</p>
                    </div>

                    <div className='border border-gray-200 rounded-xl p-6 text-center space-y-4'>
                        <div className='bg-gray-200 inline-block p-3 rounded-md'>
                            <FiHeart  size={20} />
                        </div>

                        <h3 className=''>Save Favorites</h3>

                        <p className='text-xs text-gray-500'>Keep track of your favorite recipes and access them anytime.</p>
                    </div>

                    <div className='border border-gray-200 rounded-xl p-6 text-center space-y-4'>
                        <div className='bg-gray-200 inline-block p-3 rounded-md'>
                            <LuChefHat size={20} />
                        </div>

                        <h3 className=''>Step-by-Step</h3>

                        <p className='text-xs text-gray-500'>Clear instructions with prep time, cooking time, and difficulty levels.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyMealMate
