import React from 'react';
import Banner from '../../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import Instructors from '../../Instructors/Instructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <h3>This is home page</h3>
        </div>
    );
};

export default Home;