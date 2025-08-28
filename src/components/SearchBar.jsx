import React, { useState } from 'react';
import { LuSearch } from "react-icons/lu";

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(term.trim()); // send value to parent
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col md:flex-row items-center gap-3 w-full"
        >
            <div className="flex items-center w-full border-none pl-3 gap-2 bg-gray-100 h-9 rounded-lg overflow-hidden focus-within:ring-3 focus-within:ring-gray-300">
                <LuSearch className='text-gray-500' />

                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search recipes or ingredients..."
                    className="w-full h-full outline-none text-gray-700 placeholder-gray-500 placeholder:text-xs text-sm"
                />
            </div>

            <button 
                type="submit" 
                className="bg-black w-full md:w-auto px-5 h-9 rounded-lg text-sm text-white cursor-pointer"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
