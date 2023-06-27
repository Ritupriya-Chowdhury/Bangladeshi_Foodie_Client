//This is header

import  { useContext, useState } from 'react';
import logo from '../../Image/logo.png';
import { FaRegUserCircle, FaList } from 'react-icons/fa';
import ActiveLink from '../../ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {
    const { user, SignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        SignOut()
            .then(

        )
            .catch(error => console.error(error.message))

    }
    
    const [open, setOpen] = useState(false);
    return (
        <div className='md:flex mt-8 md:mb-8 mb-36 mr-2 '>
            <div className='flex'>
                <div className='ml-2 md:ml-4 '>
                    <img src={logo} alt="" className='w-32 h-32' />
                </div>
                <div className='my-auto text-center ml-1'>
                    <p className='text-3xl md:text-4xl font-semibold text-orange-500'>Bangladeshi Foodie</p>
                    <p className='italic md:text-lg text-orange-400'>Authentic Bengali Chef's Recipes</p>
                </div>
            </div>
            <div className=' mx-20 md:mx-0 my-2 md:my-12  font-bold text-orange-400 '>
                <div className=' hover:text-red-500 text-2xl  md:hidden ' onClick={() => setOpen(!open)} >
                    <FaList></FaList>
                </div>
                <div className={`md:flex  md:ml-32 absolute  md:static ${open ? 'top-46' : '-top-96'} md:top-0 `}>


                    <div className='text-2xl mt-2   md:mr-8'>
                        <ActiveLink to='/' className=' '>Home</ActiveLink>
                    </div>


                    <div className='my-2 text-2xl   md:mr-8 hover:text-red-500'>

                        <ActiveLink to='/blog' className=''>Blog</ActiveLink>

                    </div>
                    <div className='md:mr-8  mt-2 md:mt-4  text-2xl  '>
                        <ActiveLink to='/profile' >
                            <FaRegUserCircle></FaRegUserCircle>
                        </ActiveLink>
                    </div>
                    {
                        user ? 
                            
                            <button className='text-2xl text-white font-bold md:mr-8 text-center w-32 rounded mt-2 md:mt-2 bg-orange-400 hover:bg-red-600 py-2 text-'  onClick={handleSignOut} >Logout</button>  :
                            <div className='text-2xl  md:mr-8  mt-2 md:mt-2'>
                                <ActiveLink to='/login' >Login</ActiveLink>
                            </div>

                    }



                </div>
            </div>
        </div>
    );
};

export default Header;