import React from 'react'
import { useNavigate } from 'react-router'

function Explorer() {

    const navigate = useNavigate();

    return (
        <div className='bg-black text-white'>

            <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-4'>

                <h3 className='text-2xl font-medium'>Ready to Start Cooking?</h3>

                <p className='text-center'>Join thousands of home cooks discovering new recipes every day.</p>

                <button
                    type="button"
                    onClick={()=> navigate('/recipes')}
                    className='px-5 py-2.5 bg-white text-black text-xs rounded-lg mt-6 hover:bg-gray-200 cursor-pointer'
                >
                    Explore Recipes Now
                </button>
            </section>
        </div>
    )
}

export default Explorer
