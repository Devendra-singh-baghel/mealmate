import React from 'react'
import { LuChefHat, LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

function Footer() {
    return (
        <div>
            <footer className='max-w-[1380px] w-full mx-auto border-t border-gray-300'>

                <div className='flex flex-col md:flex-row md:gap-20 mt-5'>
                    <div className='md:w-1/3 w-full px-4'>
                        <div className='flex items-center gap-3 mb-4'>
                            <LuChefHat size={20} />
                            <h3>MealMate</h3>
                        </div>
                        <div>
                            <p className='text-xs text-gray-500'>Discover delicious recipes from around the world. Search by ingredients, save your favorites, and cook with confidence.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 px-4 py-8 md:gap-6'>
                        <div className='text-gray-500'>
                            <h3 className='mb-4 text-black'>Quick Links</h3>

                            <ul className='list-none text-xs space-y-2'>
                                <li>Browse Recipes</li>
                                <li>Popular Ingredients</li>
                                <li>Cooking Tips</li>
                                <li>Recipe Categories</li>
                            </ul>
                        </div>

                        <div className='text-gray-500'>
                            <h3 className='mb-4 text-black'>Contact Us</h3>

                            <ul className='list-none text-xs space-y-2'>
                                <li>
                                    <div className='flex items-center gap-1'>
                                        <LuMail />
                                        devendrabaghel0220@gmail.com
                                    </div>
                                </li>

                                <li>
                                    <div className='flex items-center gap-1'>
                                        <FiPhone />
                                        +919630840725
                                    </div>
                                </li>

                                <li>
                                    <div className='flex items-center gap-1'>
                                        <GrLocation />
                                        Madhya Pradesh, India
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-300 pb-4'>
                    <p className='text-gray-500 text-xs text-center py-4'>© 2025 MealMate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
