import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { AuthContext } from '../Providers/AuthProvider';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor,isInstructorLoading ] = useInstructor();
    if (loading || isInstructorLoading) {
        return <div className='grid items-center justify-center h-screen'><FadeLoader color="#36d7b7" /></div>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" replace></Navigate>
};

export default InstructorRoute;