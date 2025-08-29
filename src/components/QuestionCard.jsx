import React from 'react'

function QuestionCard({question, answer}) {
    return (
        <div className='max-w-2xl w-full bg-white border border-gray-300 rounded-xl p-5 space-y-2'>

            <h3 className='font-semibold'>{question}</h3>

            <p className='text-sm text-gray-500'>{answer}</p>
        </div>
    )
}

export default QuestionCard
