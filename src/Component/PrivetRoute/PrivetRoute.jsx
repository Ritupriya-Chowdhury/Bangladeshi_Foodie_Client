import React, { useContext } from 'react';
import { AuthContext } from '../Shear/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading) {
        <div className='text-center my-12 text-red-600 text-3xl font-bold '>Loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" ></Navigate>
};

export default PrivetRoute;
