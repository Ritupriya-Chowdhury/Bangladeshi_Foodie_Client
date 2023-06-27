import React from 'react';
import Header from '../Header/Header';
import {  Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Banner = () => {
    const navigation=useNavigation()
    return (
        <div>
           <Header></Header>
           <div className='font-bold text-red-500 text-center mt-8'>{navigation.state==='loading'&& "Loading..."}</div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Banner;