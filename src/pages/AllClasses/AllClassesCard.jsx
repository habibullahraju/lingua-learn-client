import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const AllClassesCard = ({allClass}) => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [,refetch] = useCart();
  const {_id, name, image, price, availableSeat, instructorName} = allClass;

  const handleSelectItem = item =>{
    if (!user) {
      return navigate('/login')
    }
    if (user && user.email) {
      const cartItem ={classId: _id,name, image, price, availableSeat, instructorName,email: user.email }
      fetch('http://localhost:5000/carts',{
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
        
      })
      .then(res => res.json())
      .then(data =>{
        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your class is successfully added!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  }



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
        <p><span className="font-bold">Price:</span> ${price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleSelectItem(allClass)} disabled={isAdmin | isInstructor}  className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
