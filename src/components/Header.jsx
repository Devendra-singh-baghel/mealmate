import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { LuChefHat } from "react-icons/lu";
import { FiHome, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CiHeart, CiCircleInfo, CiMail } from "react-icons/ci";

const menuList = [
  { title: "Home", path: "/", icon: <FiHome /> },
  { title: "Recipes", path: "/recipes", icon: <FiSearch /> },
  { title: "Favorites", path: "/favorites", icon: <CiHeart /> },
  { title: "About", path: "/about", icon: <CiCircleInfo /> },
  { title: "Contact", path: "/contact", icon: <CiMail /> },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full border-b border-gray-300 sticky top-0 right-0 left-0 bg-white z-50'>

      <div className='max-w-[1380px] w-full mx-auto flex justify-between items-center px-4 py-3'>

        {/* Logo */}
        <NavLink to={"/"} className='flex justify-center items-center gap-2'>
          <LuChefHat className='size-7' />
          <h2 className='text-lg font-semibold'>MealMate</h2>
        </NavLink>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-3'>
          {menuList.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-lg duration-300 transition-all
                 ${isActive ? "bg-black text-white" : "text-gray-500 hover:bg-gray-200 hover:text-black"}`
              }
            >
              {menu.icon}{menu.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-2xl text-gray-700 focus:outline-none'
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-2 px-4 pb-4 bg-white border-t border-gray-200'>
          {menuList.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              onClick={() => setIsOpen(false)} // close menu after click
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md duration-300 transition-all
                 ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200 hover:text-black"}`
              }
            >
              {menu.icon}{menu.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Header
