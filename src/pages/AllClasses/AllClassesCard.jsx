import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AllClassesCard = ({allClass}) => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {_id, name, image, price, availableSeat, instructorName} = allClass;

  const handleSelectItem = id =>{
    if (!user) {
      return navigate('/login')
    }
    console.log(id);
  }



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
          <button onClick={()=>handleSelectItem(_id)} disabled={isAdmin | isInstructor}  className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
