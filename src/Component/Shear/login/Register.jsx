import  { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {

  const navigate=useNavigate()
  const [error,setError]=useState('');
  

  // .......................Create User................. 


    const {createUser}=useContext(AuthContext);
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const password=form.password.value;
        const photo=form.photo.value;
        const email=form.email.value;
        createUser(email,password)
        .then(result=>{
          const createdUser=result.user;
          console.log(createUser);
          setError('');
          form.reset();
          navigate('/login');


        })
        .catch(error=>{
          setError(error.message)
        })


    }
    return (
      <div>
        
        <div className='mx-auto my-8 p-8 w-80 border border-black'>
      <p className='text-2xl text-center mb-8 font-bold'>Register an Account!!!</p>
      <div className=''>
        <form  onSubmit={handleRegister}>
        <div className='mb-8'>
            <p className='text-xl mb-2'>Name:</p>
            <input  type="text" className='border  border-slate-400  rounded w-64' name='name' required />
          </div>
          <div className='mb-8'>
            <p className='text-xl mb-2'>Email:</p>
            <input  type="email" name='email' id='email' className='border border-slate-400  rounded w-64' required />
          </div>
          <div className='mb-8'>
            <p className='text-xl mb-2'> Password:</p>
            <input type="password" name='password' id='password' className='border border-slate-400  rounded w-64' required />
          </div>
          <div className='mb-8'>
            <p className='text-xl mb-2'> Give an Image</p>
            <input type="text" src="" alt="" width="48" height="48" className='border border-slate-400  rounded w-64' name='photo' required /> 
          </div>
          <p className='text-red-400'>{error}</p>
          <input type='submit' className='text-center text-xl rounded bg-orange-200 hover:bg-orange-400 w-64 py-2' value='Register' />
        </form>
        
      </div>
      <div className='flex text-sm my-4'>
        <p>Already have an account?</p>
        <Link to='/login' className='text-orange-400 ml-2'>Login</Link>
      </div>
     

    </div>
    </div>
    );
};

export default Register;