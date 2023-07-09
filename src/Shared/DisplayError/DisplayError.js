import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const {logout} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
              navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1 className='text-2xl text-red-500'>Something went wrong</h1>
            <p className='text-red-400'>
                <i>{error.statusText || error.message}</i>
            </p>
            <h4 className="text-2xl">Please <button onClick={handleLogout} className='btn btn-accent'>Log Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;