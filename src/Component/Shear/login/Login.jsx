import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';





const Login = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('');



  const { signIn, signInWithGoogle,signInWithGit } = useContext(AuthContext);

  //  ...................Login user with email and password......................

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        event.target.reset();
        navigate('/');

        
      })
      .catch(error => {
        setError(error.message);
      })

  }



  //Sign in with Google

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
      })


  }


  // SignIn With GitHub

 const handleGitSignIn=()=>{
  signInWithGit()
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    setError('');
    
    navigate('/');
  })
  .catch(error=>console.error(error.message))
 }


  return (

    <div>






      <div className='mx-auto my-8 p-8 w-80 border border-black'>
        <p className='text-2xl text-center mb-8 font-bold'>Please Login!!!</p>
        <div className=''>
          <form onSubmit={handleLogin}>

            <div className='mb-8'>
              <p className='text-xl mb-2'>Email:</p>
              <input onChange='' type="email" name='email' id='email' className='border border-slate-400  rounded w-64' required />
            </div>
            <div className='mb-8'>
              <p className='text-xl mb-2'> Password:</p>
              <input type="password" name='password' id='password' className='border border-slate-400  rounded w-64' onBlur='' required />
            </div>
            <p className='text-red-400'>{error}</p>
            <input type='submit' className='text-center text-xl rounded bg-orange-200 hover:bg-orange-400 w-64 py-2' value='Login' />
          </form>
        </div>
        <div className='flex text-sm my-4'>
          <p>New to Bangladeshi Foodie?</p>
          <Link to='/register' className='text-orange-400 ml-2'>Register</Link>
        </div>
        <p className=' text-center'> or </p>
        <div className='flex p-4 my-4  border border-slate-400 hover:bg-orange-300 rounded' onClick={handleGoogleSignIn} >
          <p className='text-2xl text-blue-500 mr-2'><FaGoogle></FaGoogle>
          </p> <p>Continue with Google</p>
        </div>
        <div className='flex p-4 my-4  border border-slate-400 hover:bg-orange-300 rounded' onClick={handleGitSignIn} >

          <p className='text-2xl  mr-2'>
            <FaGithub></FaGithub>
          </p>

          <p>Continue with Github</p>
        </div>

      </div>



    </div>
  );
};

export default Login;