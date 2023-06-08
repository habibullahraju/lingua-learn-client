import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popular-classes')
        .then(res => res.json())
        .then(data => {
            setPopularClasses(data.slice(0,6))
        })
    },[])
    
    return (
        <div className='my-16'>
            <h2 className='text-4xl mb-4 text-center font-bold'>Our Popular Classes</h2>
            <p className='text-center mb-4 text-gray-600 '>Discover our Popular Language Classes: Expand Your Linguistic Horizons!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8'>
                {
                    popularClasses.map(popularClass => <PopularClassCard
                        key={popularClass._id}
                        popularClass={popularClass}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;