import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-full h-screen' src="https://www.pushengage.com/wp-content/uploads/2022/09/404-Page-Design-Examples.png" alt="" />
            <Link className='absolute top-1/2 right-10' to="/"><button className='btn btn-info text-white'>Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;