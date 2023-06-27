import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

const Chef = ({ chef }) => {



    return (

        <div className="col border border-black m-4 h-11/12  ">
            <p className=''><img src={chef.image} alt="" className='w-72 h-72 mx-auto pt-4' /></p>
            <p className='text-center mt-4 mb-2 font-semibold text-orange-400 text-2xl  '>{chef.name}</p>
            <div className='flex '>
                <p className='text-orange-400 font-semibold text-xl p-2'>{chef.experience}  experience.</p>
                <p className='text-orange-400 font-semibold text-lg p-2'>{chef.recipes} Recipes</p>
            </div>
            <div className='flex'>

                <p className='mb-8 ml-4 mt-2'>
                    <Link className=' font-bold md:text-lg bg-orange-500 hover:bg-red-500 text-white p-2  rounded '
                        to={`/${chef.id}`}>View Details</Link>
                </p>
                <p>
                    <p className='text-xl ml-8 hover:text-blue-500' ><FaRegThumbsUp></FaRegThumbsUp></p>
                    <p className='ml-8'> Likes</p>
                </p>

            </div>
        </div>


    );
};

export default Chef;