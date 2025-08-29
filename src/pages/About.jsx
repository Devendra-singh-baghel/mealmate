import React from 'react'
import introImg from '../assets/introImg.jpg'
import { FiSearch, FiHeart } from "react-icons/fi";
import { LuChefHat } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import ImpactCard from '../components/ImpactCard';
import MakeUsCard from '../components/MakeUsCard';
import TeamCard from '../components/TeamCard';
import profile_alison from '../assets/profile_alison.png'
import profile_martin from '../assets/profile_martin.png'
import profile_richard from '../assets/profile_richard.png'

function About() {
  return (
    <div>

      <section className='flex flex-col md:flex-row justify-between gap-7 max-w-[1320px] w-full mx-auto px-4 py-10 md:py-20'>

        <div className='flex flex-col justify-center text-center md:text-left max-w-2xl w-full space-y-7'>

          <h1 className='text-4xl md:text-5xl max-w-lg'>About MealMate</h1>

          <p className='text-gray-500 text-base md:text-lg'>We're passionate about making cooking accessible, enjoyable, and inspiring for everyone. Our platform connects food lovers with thousands of carefully curated recipes.</p>

          <p className='text-gray-500 text-sm pr-10'>Founded in 2024, Recipe Finder has grown into a vibrant community of home cooks, professional chefs, and food enthusiasts who share a love for great food and cooking.</p>

        </div>

        <div className='rounded-lg'>
          <img
            src={introImg}
            alt="image"
            className='w-full rounded-lg shadow-2xl'
          />
        </div>
      </section>

      <section className='w-full bg-gray-100 '>

        <div className='max-w-[1320px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-2'>

          <div className='text-center space-y-3 max-w-xl'>
            <h2 className='text-2xl font-medium'>Our Impact</h2>

            <p className='text-gray-500 text-sm'>We're proud of the community we've built and the impact we've made in kitchens around the world.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 w-full gap-4 md:gap-7 mt-10'>
            <ImpactCard
              icon={<FiSearch size={25} />}
              count={"10,000+"}
              text={"Recipes"}
            />

            <ImpactCard
              icon={<TbUsers size={25} />}
              count={"50,000+"}
              text={"Users"}
            />

            <ImpactCard
              icon={<FiHeart size={25} />}
              count={"250,000+"}
              text={"Favorites Saved"}
            />

            <ImpactCard
              icon={<FaRegStar size={25} />}
              count={"4.8/5"}
              text={"Average Rating"}
            />

          </div>

        </div>
      </section>

      <section className='w-full'>

        <div className='max-w-[1320px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-2'>

          <div className='text-center space-y-3 max-w-xl'>
            <h2 className='text-2xl font-medium'>What Makes Us Special</h2>

            <p className='text-gray-500 text-sm'>We've built Recipe Finder with features that make cooking more enjoyable and accessible for everyone.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-7 mt-10'>
            <MakeUsCard
              icon={<FiSearch size={20} />}
              title={"Smart Recipe Search"}
              desc={"Find recipes by ingredients, dish names, or dietary preferences with our advanced search functionality."}
            />

            <MakeUsCard
              icon={<FiHeart size={20} />}
              title={"Personal Collections"}
              desc={"Save your favorite recipes and create personalized collections for easy access anytime."}
            />

            <MakeUsCard
              icon={<MdAccessTime size={20} />}
              title={"Detailed Instructions"}
              desc={"Step-by-step cooking instructions with prep time, cook time, and difficulty levels for every recipe."}
            />

            <MakeUsCard
              icon={<TbUsers size={20} />}
              title={"Community Driven"}
              desc={"Discover recipes shared by passionate home cooks and professional chefs from around the world."}
            />

          </div>

        </div>
      </section>

      <section className='bg-black text-white px-5'>

        <div className='max-w-2xl w-full mx-auto flex flex-col justify-center items-center text-center py-14 space-y-6'>

          <LuChefHat className='size-15 text-gray-300' />

          <h3 className='text-2xl font-medium'>Our Mission</h3>

          <p className='text-lg text-gray-300'>To inspire confidence in the kitchen by providing accessible, high-quality recipes and cooking resources that bring people together through the joy of food.</p>

          <p className='text-sm text-zinc-300/90'>Whether you're a beginner cook looking to learn the basics or an experienced chef seeking new inspiration, Recipe Finder is here to support your culinary journey.</p>

        </div>
      </section>

      <section className='w-full'>

        <div className='max-w-[1320px] w-full mx-auto flex flex-col justify-center items-center px-4 py-14 space-y-2'>

          <div className='text-center space-y-3 max-w-xl'>
            <h2 className='text-2xl font-medium'>Meet Our Team</h2>

            <p className='text-gray-500 text-sm'>Passionate food lovers dedicated to making cooking accessible to everyone.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 w-full gap-4 md:gap-7 mt-10'>
            <TeamCard
              image={profile_martin}
              name={"Martin Johnson"}
              profession={"Head Chef & Recipe Developer"}
            />

            <TeamCard
              image={profile_richard}
              name={"Richard Chen"}
              profession={"Lead Developer"}
            />

            <TeamCard
              image={profile_alison}
              name={"Alison Davis"}
              profession={"Community Manager"}
            />

            <TeamCard
              image={''}
              name={"Mike Chen"}
              profession={"Lead Developer"}
            />

          </div>

        </div>
      </section>

    </div>
  )
}

export default About
