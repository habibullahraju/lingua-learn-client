import React from 'react';
import Banner from '../../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import Instructors from '../../Instructors/Instructors';
import Framer from '../../FramerMotion/Framer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <Framer></Framer>
            <h3>This is home page</h3>
        </div>
    );
};

export default Home;