import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

// private route

const RequireAuth = ({children}) => {
    const [user, loading] =useAuthState(auth);
    const location = useLocation();

// if loading

    if (loading) {
        return (
            <p className='text-center fs-1'>
                Loading..
            </p>
        )
    }

// if user found

    if (user) {
        return children;
    } else {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
};

export default RequireAuth;