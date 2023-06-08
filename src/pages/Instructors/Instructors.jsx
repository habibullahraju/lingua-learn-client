import React, {useEffect, useState} from "react";
import PopularInstructorCard from "./PopularInstructorCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Instructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure("/instructor")
      .then((data) => {
        setPopularInstructors(data.data);
      });
  }, []);
  return (
    <div className="px-4 md:px-8 mt-16">
      <h3 className="text-4xl mb-4 text-center font-bold">
        Our Popular Instructors
      </h3>
      <p className="text-center mb-4 text-gray-600 ">
        Expert mentors fueling language mastery with immersive lessons,
        personalized guidance, and rapid progress
      </p>
      <div className="grid md:grid-cols-3 gap-10 ">
        {popularInstructors.map((popularInstructor) => (
          <PopularInstructorCard
            key={popularInstructor._id}
            popularInstructor={popularInstructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
