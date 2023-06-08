import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FadeLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='grid items-center justify-center h-screen'><FadeLoader color="#36d7b7" /></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;