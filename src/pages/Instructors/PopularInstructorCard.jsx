import React from "react";
import {FaArrowRight} from "react-icons/fa";

const PopularInstructorCard = ({popularInstructor}) => {
  const {name, image, email} = popularInstructor;

  return (
    <div className="card w-full  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="instructor"
          className="rounded-full w-52 h-52 object-cover object-top"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className=" text-xl font-bold text-center ">{name}</h2>

        <p className="text-md">
          <span className="items-center flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

          {email}
          </span>
        </p>
        <div className="card-actions ms-auto">
          <button className="btn">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
