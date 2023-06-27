import React from 'react';
import logo from '../../Image/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// This is Footer
const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-8 py-12 bg-black mt-8 '>
            <div className="col">
                
                <div className='flex'>
                    <img src={logo} alt="" className='h-12 w-12' />
                    <div className=' text-center'>
                        <p className='font-semibold text-3xl text-orange-500'>
                            Bangladeshi Foodie
                        </p>
                        <p className='italic  text-orange-400'>Authentic Bengali Chef's Recipes</p>
                    </div>
                </div>
                <p className=' text-orange-300 mx-4 md:ml-8  my-2 text-center'>This website mainly focused on the bengali chef's and their special recipes. People can found interesting Information and recipes about bengali dishes.</p>
                

            </div>
            <div className="col ml-20 md:ml-8">
                <p className='text-orange-400 text-2xl font-semibold'>Contact</p>
                <div className=' text-orange-300 my-2'>
                    <p>Email: foodie@gmail.com</p>
                    <p className='md:ml-12'>fooban@gmail.com</p>
                </div>
                <div className='text-orange-300'>
                    <p>Phone:  +8801934567456</p>
                    <p className='md:ml-14'>+8801723333456</p>
                </div>
            </div>
            <div className="col ml-20 md:ml-16 lg:ml-0 ">
                <p className='text-orange-400 text-2xl font-semibold'>Features</p>
                <div className=' text-orange-300 my-2 text-lg'>
                <p>Authentic Bengali Recipes</p>
                <p>Bangladeshi Chefs and their special recipes.</p>
                </div>
            </div>
            <div className="col ml-20 md:ml-12 lg:ml-0">
                <p className='text-orange-400 text-2xl font-semibold'>Found Us</p>
                <div className='flex  my-2 text-2xl'>
                <FaFacebook className="text-blue-500 ml-2"></FaFacebook>
                <FaInstagram className="text-orange-500 ml-4"></FaInstagram>
                <FaTwitter className="text-blue-500 ml-4"></FaTwitter>
                </div>
            </div>
        </div>
    );
};

export default Footer;