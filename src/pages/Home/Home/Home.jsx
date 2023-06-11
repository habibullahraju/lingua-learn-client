import React from 'react';
import Banner from '../../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import Instructors from '../../Instructors/Instructors';
import EarnMoney from '../../EarnMoney/EarnMoney';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <EarnMoney></EarnMoney>
        </div>
    );
};

export default Home;