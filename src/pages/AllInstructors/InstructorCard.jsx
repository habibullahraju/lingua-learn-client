import React from "react";

const InstructorCard = ({instructor}) => {
  const {name, image, email} = instructor;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="instructor"
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name}</h2>
        <p>Email: {email}</p>
        <div className="card-actions">
         
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
