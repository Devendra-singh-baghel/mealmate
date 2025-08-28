import React, { useEffect, useState } from 'react'
import { LuChefHat } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { useParams } from 'react-router';
import getIngredients from '../lib/getIngredients';
import Loader from '../components/Loader';


function RecipeDetail() {

    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMealDetail = async () => {
            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                if (!res.ok) throw new Error("Failed to fetch meal detail");
                const result = await res.json();
                setMeal(result.meals ? result.meals[0] : null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMealDetail();
    }, [id]);



    if (loading) return <Loader />;
    if (error) return <p className="min-h-screen p-4 text-red-500">{error}</p>;
    if (!meal) return <p className="min-h-screen p-4">Meal not found.</p>;

    const instructions = meal.strInstructions
        .split("\n")   // Split by line break or dot + space
        .map(step => step.trim()) // Remove extra spaces
        .filter(step => step.length > 0); // Ignore empty steps

    const ingredients = getIngredients(meal);


    return (
        <div className=''>
            <section className='max-w-[1380px] w-full mx-auto px-4 space-y-2 mb-14'>

                <h2 className='font-semibold text-xl px-2 py-4'>{meal.strMeal}</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>

                    <div className='cursor-pointer overflow-x-clip overflow-y-clip rounded-lg md:mt-20'>
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className='w-full h-96 object-cover hover:scale-105 transition-transform duration-300 rounded-lg'
                        />

                        <div className='mt-10 space-y-6'>
                            <div>
                                <span className='font-semibold'>Category : </span>
                                <span>{meal.strCategory}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Tags : </span>
                                {
                                    meal.strTags &&
                                    meal.strTags.split(",").map((tag, index) => (
                                        <span
                                            key={index}
                                            className='px-3 py-1 bg-gray-200 rounded-md ml-2 text-sm'
                                        >
                                            #{tag.charAt(0).toUpperCase() + tag.slice(1)}
                                        </span>
                                    ))
                                }
                            </div>
                            {
                                meal.strYoutube && (
                                    <a
                                        href={meal.strYoutube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='inline-flex items-center gap-2 bg-red-700/85 px-3 py-1.5 rounded-lg text-white font-bold cursor-pointer hover:bg-red-800 duration-500'
                                    >
                                        <FaPlay size={15} />
                                        YouTube
                                    </a>

                                )
                            }
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <div>
                            <div className='flex items-center gap-2 mb-4 font-semibold text-xl'>
                                <LuChefHat size={22} />
                                <h3>Ingredients</h3>
                            </div>

                            <table className='w-full text-left rounded-lg overflow-hidden border-collapse'>
                                <thead className='bg-gray-200'>
                                    <tr>
                                        <th className='px-4 py-2 text-left font-medium'>Ingredients</th>
                                        <th className='px-4 py-2 text-left font-medium'>Measure</th>
                                    </tr>
                                </thead>

                                <tbody className='bg-gray-100'>
                                    {ingredients.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
                                        >
                                            <td className='px-4 py-2'>{item.ingredient}</td>
                                            <td className='px-4 py-2'>{item.measure}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                        {/* instructions */}
                        <div className='mt-10 border-t border-gray-300 space-y-4'>
                            <h3 className='mt-5 text-xl font-semibold'>Instructions</h3>

                            <ul className='list-none space-y-3'>
                                {instructions.map((step, index) => (
                                    <li key={index}>
                                        <div className='flex gap-5 px-2'>
                                            <div className='h-5 w-5 rounded-full bg-black text-white flex justify-center items-center text-xs p-3 mt-1.5'>{index + 1}</div>
                                            <span>{step}</span>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default RecipeDetail
