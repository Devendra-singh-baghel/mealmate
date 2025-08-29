import React from 'react'

function ImpactCard({icon, count, text}) {
    return (
        <div className='max-w-xl w-full flex flex-col justify-center items-center bg-white border border-gray-200 rounded-xl p-5 text-center'>
            <span className='mb-6'>
                {icon}
            </span>

            <h3 className='text-xl'>{count}</h3>

            <p className='text-xs text-gray-500'>{text}</p>
        </div>
    )
}

export default ImpactCard
