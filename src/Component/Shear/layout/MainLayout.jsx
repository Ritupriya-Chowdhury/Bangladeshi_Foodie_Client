import React from 'react';
import AuthenticDishes from './AuthenticDishes';
import Chefs from './Chefs';



const MainLayout = ({chefs}) => {
  
   
    return (
        <div className='md:w-3/5 mx-4'>
           <p className='text-2xl font-bold text-orange-500 my-4 text-center'>Authentic Bengali Food</p>
          <AuthenticDishes></AuthenticDishes>
                <Chefs key={chefs['0'].id} chefs={chefs}></Chefs>
        
        </div>
    );
};

export default MainLayout;