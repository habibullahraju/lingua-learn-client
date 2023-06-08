import React, { useEffect, useState } from 'react';
import AllClassesCard from './AllClassesCard';

const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-classes')
        .then(res => res.json())
        .then(data => {
            setAllClasses(data)
        })  
    },[])
    return (
        <div className='px-4 md:px8'>
            <h2 className='text-center text-4xl font-bold my-10'>Our all classes</h2>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    allClasses.map(allClass => <AllClassesCard
                        key={allClass._id}
                        allClass={allClass}
                    ></AllClassesCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;