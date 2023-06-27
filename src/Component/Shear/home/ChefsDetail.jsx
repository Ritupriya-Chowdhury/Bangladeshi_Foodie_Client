import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const ChefsDetail = () => {
    const chef=useLoaderData();
    const location=useLocation()
    console.log(chef);
    return (
        <div className='m-8 grid grid-cols-1  '>
            <div className='col border border-black mx-2 '>
            <div className='my-8 text-center'>
            <p className=' '>
           <img src={chef.image} alt="" className='w-96 mx-auto mb-2 ' />
            </p>
            <p className='text-center text-orange-400 text-lg font-semibold'>{chef.name}</p>
            <p className='p-2  text-slate-600'>{chef.short_bio}</p>
            </div>
            </div>
            <div className='col '>
                <p className='text-center text-3xl text-orange-500 font-bold my-2'>Recipes</p>
                <div className='grid grid-col-1 mx-4 border border-black' >
                    {
                        chef.special_dishes.map(dish=>
                          <div className='col  m-8 border border-orange-300'>
                            <p className=' my-2 '>
                            <img src={dish.image} alt="" className='mx-auto' />
                            </p>
                            <p  className='text-center text-xl font-semibold text-orange-400'>{dish.name}</p>
                            <div className="grid grid-cols-2 ">

                                {
                                    dish.ingredients.map(ingredient=>
                                        <p className='col mx-20 my-4'>{ingredient}</p>
                                    )
                                }
                            </div>
                            <p className='p-2 text-slate-600'>
                                {dish.recipe}
                            </p>

                          </div>  )
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefsDetail;
