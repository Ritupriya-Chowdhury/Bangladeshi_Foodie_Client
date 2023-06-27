//This is the banner section of the MainLayout of Home page

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const AuthenticDishes = () => {
    const [dishes,setDishes]=useState([]);
    useEffect(()=>{
        fetch('https://bangladesh-foodie-server-ritupriya-chowdhury.vercel.app/authentic')
        .then(res=>res.json())
        .then(data=>setDishes(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div className=''>
            <Marquee>
            {
                dishes.map(dish=> <div key={dish.id} className='p-4 border border-black rounded flex w-96 h-96 '>
                    <img src={dish.image_url} alt="" className='w-52 h-48 my-auto'  />
                    <div className='my-auto ml-4 '>
                    <p className='text-lg font-semibold text-orange-500 mb-2 mt-4 '>{dish.food_name}</p>
                    <p className='text-orange-400'>{dish.made_from}</p>
                    </div>
                </div> )
            }
            </Marquee>
        </div>
    );
};

export default AuthenticDishes;