import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FadeLoader } from 'react-spinners';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <div className='grid items-center justify-center h-screen'><FadeLoader color="#36d7b7" /></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/"  replace></Navigate>
};

export default AdminRoute;