import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const PrivateRoutes = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <p className='text-center fs-1'>
                Loading..
            </p>
        )
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }
};
export default PrivateRoutes;