import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
     if(loading){
        return <p className='text-2xl font-bold text-primary'>Loading...</p>
     }
      if(user){
        return children;
      }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;