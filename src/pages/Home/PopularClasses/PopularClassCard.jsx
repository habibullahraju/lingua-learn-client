import React from "react";

const PopularClassCard = ({popularClass}) => {
  const {name, image, instructorName,enrolled, price, availableSeat} = popularClass;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><span className="font-bold">Instructor Name:</span> {instructorName}</p>
        <p><span className="font-bold">Price:</span>  ${price}</p>
        <p><span className="font-bold">Available Seats:</span> {availableSeat}</p>
        <p><span className="font-bold">Enrollment Students:</span> {enrolled}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
