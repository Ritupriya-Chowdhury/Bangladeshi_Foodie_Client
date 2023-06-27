// This is Home page.All layout are added here
import React from 'react';
import LeftLayout from '../layout/LeftLayout';
import MainLayout from '../layout/MainLayout';
import RightLayout from '../layout/RightLayout';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs=useLoaderData();
    
   
    return (
        <div className=' md:flex '>
            
            <LeftLayout ></LeftLayout>
            <MainLayout key={chefs['0'].id} chefs={chefs} ></MainLayout>
            <RightLayout ></RightLayout>
        </div>
    );
};

export default Home;