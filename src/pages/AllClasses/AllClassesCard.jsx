import React from "react";

const AllClassesCard = ({allClass}) => {
  const {name, image, price, availableSeat, instructorName} = allClass;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-bold">Instructor Name:</span> {instructorName}</p>
        <p><span className="font-bold">Available Seats:</span> {availableSeat}</p>
        <p><span className="font-bold">Price:</span> ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
