import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-instructors')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data)
        }) 
    },[])
    console.log(allInstructors);
    return (
        <div className='px-4 md:px-8'>
            <h3 className='text-6xl mt-10 text-center font-bold'>Our instructors</h3>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    allInstructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default AllInstructors;