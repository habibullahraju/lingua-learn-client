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
        
        <p className="text-md"><span className="font-bold ">Email:</span>{email}</p>
        <div className="card-actions">
          <button className="btn"><FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
