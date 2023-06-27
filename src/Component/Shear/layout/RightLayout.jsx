//This the section where added different district's special food

import React from 'react';
import moglaiParata from '../../Image/Untitled.jpg';
import Halem from "../../Image/Untitled2.jpg";
import MejbaniMangso from "../../Image/MejbaniMangso.jpg";
import shutkiBharta from "../../Image/sutkiBharta.jpg";
import ShatkoraBeef from '../../Image/Shatkorabeef.jpg';
import kotkoti from '../../Image/Kotkoti.jpg';
import beefChaap from '../../Image/beefChaap.jpg';
const RightLayout = () => {
    return (
        <div className='md:w-1/5 mx-2 my-8 md:my-4 '>
            <p className='text-center text-xl font-bold text-orange-500 '>Special Dishes of Different District</p>
            <div className='border border-black rounded my-4'>
                <p className='font-semibold text-center my-2 text-orange-400 text-lg'>Dhaka</p>
                <div className='border border-orange-400 m-2 '>
                    <img src={moglaiParata} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Moglai Parata</p>
                </div>
                <div className='border border-orange-400 mt-2 m-2 '>
                    <img src={Halem} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Halem</p>
                </div>
            </div>
            <div className='border border-black rounded my-4'>
                <p className='font-semibold text-center my-2 text-orange-400 text-lg'>Chattogram</p>
                <div className='border border-orange-400 m-2 '>
                    <img src={MejbaniMangso} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Mejbani Gorur Kala Bhuna</p>
                </div>
                <div className='border border-orange-400 mt-2 m-2 '>
                    <img src={shutkiBharta} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Chingri Shutki Bharta</p>
                </div>
            </div>
            <div className='border border-black rounded my-4'>
                <p className='font-semibold text-center my-2 text-orange-400 text-lg'>Sylhet</p>
                <div className='border border-orange-400 m-2 '>
                    <img src={ShatkoraBeef} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Shatkor Beef</p>
                </div>
                
            </div>
            <div className='border border-black rounded my-4'>
                <p className='font-semibold text-center my-2 text-orange-400 text-lg'>Bogura</p>
                <div className='border border-orange-400 m-2 '>
                    <img src={kotkoti} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Kotkoti Mahasthangarh</p>
                </div>
                <div className='border border-orange-400 mt-2 m-2 '>
                    <img src={beefChaap} alt="" className='p-2' />
                    <p className='text-lg text-center text-orange-400 mb-2  font-semibold'>Beef Chaap</p>
                </div>
            </div>
        </div>
    );
};

export default RightLayout;