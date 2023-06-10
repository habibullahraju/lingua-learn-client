import React from 'react';

const EnrollClassCard = ({myCls}) => {
    const {_id, name, image, price, availableSeat, instructorName} = myCls;
    return (
        <div className={`card w-full  shadow-xl ${availableSeat !== 0? 'bg-base-100': 'bg-red-500'}`}>
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
        <div className="card-actions justify-end">
          <button   className="btn btn-primary">Continue Class</button>
        </div>
      </div>
    </div>
    );
};

export default EnrollClassCard;