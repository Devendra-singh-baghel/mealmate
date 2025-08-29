import React from 'react'
import { CiImageOn } from "react-icons/ci";

function TeamCard({ image, name, profession }) {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-white border border-gray-300 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <CiImageOn className="text-gray-400 size-15" />
                )}
            </div>

            <h3 className="font-semibold text-lg">{name}</h3>

            <p className="text-sm text-gray-500">{profession}</p>
        </div>
    )
}

export default TeamCard
