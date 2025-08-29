import React from 'react'

function MakeUsCard({ icon, title, desc }) {
    return (
        <div className='w-full bg-white border border-gray-300 rounded-xl p-6 space-y-3'>
            <span className='bg-gray-200 inline-block p-3 rounded-md'>
                {icon}
            </span>

            <h3>{title}</h3>

            <p className='text-sm text-gray-500'>{desc}</p>
        </div>
    )
}

export default MakeUsCard
