import React from 'react'

function Loader() {
    return (
        <div className="min-h-screen flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader
