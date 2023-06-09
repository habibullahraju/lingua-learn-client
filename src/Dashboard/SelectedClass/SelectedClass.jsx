import React from "react";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [cart, refetch] = useCart();
  const totalPrice = parseFloat(
    cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );

  const handleDelete = item =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              }
            });
        }
      });
  }
  return (
    <div>
      <div className="md:flex justify-around border p-4">
        <h3 className="text-3xl">Selected Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: {totalPrice}</h3>
        <button className="btn btn-primary bg-[#504DA6]">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((cart, index) =><tr key={cart._id}>
                    <th>
                      {index +1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={cart?.image}
                            />
                          </div>
                        </div>
                        <div>
                         
                        </div>
                      </div>
                    </td>
                    <td>
                      {cart?.name}
                    </td>
                    <td>${cart?.price}</td>
                    <th>
                      <button onClick={()=>handleDelete(cart)} className="btn btn-ghost text-white hover:text-black bg-[#504DA6] btn-xs">Delete</button>
                    </th>
                  </tr> )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedClass;
