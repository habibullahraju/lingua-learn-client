import React, {useContext, useEffect, useState} from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ManageCLasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [reloadData, setReloadData] = useState(false);
  const {user} = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);

  const handleApproveItem = (item) => {
    axiosSecure
      .put(`/approved-deny/${item?._id}`, {status: "approved"})
      .then((data) => {
        setReloadData(!reloadData);
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your class has been approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDenyItem =item =>{
    axiosSecure
    .put(`/approved-deny/${item?._id}`, {status: "denied"})
    .then((data) => {
      setReloadData(!reloadData);
      if (data.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your class has been denied",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  if (user) {
    useEffect(() => {
      axiosSecure.get("/manage-classes").then((data) => {
        setAllClasses(data.data);
      });
    }, [user, reloadData]);
  }

  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-4">Manage Classes</h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seat</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action2</th>
                <th>Action3</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleClass?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleClass?.name}</td>
                  <td>{singleClass?.instructorName}</td>
                  <td>{singleClass?.email}</td>
                  <td>{singleClass?.availableSeat}</td>
                  <td>{singleClass?.price}</td>
                  <td
                    className={`${
                      singleClass?.status == "pending"
                        ? "text-red-500  font-bold"
                        : ""
                    }`}
                  >
                    {singleClass?.status}
                  </td>
                  <th>
                    <button
                      onClick={() => handleApproveItem(singleClass)}
                      className={`btn btn-ghost text-white hover:text-black bg-[#504DA6] btn-xs ${
                        singleClass?.status !== "pending"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      } ${
                        singleClass?.status == "denied"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      }`}
                    >
                      Approve
                    </button>
                  </th>
                  <th>
                    <button
                        onClick={()=> handleDenyItem(singleClass)}
                      className={`btn btn-ghost text-white hover:text-black bg-[#504DA6] btn-xs ${
                        singleClass?.status !== "pending"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      } ${
                        singleClass?.status == "denied"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      }`}
                    >
                      Deny
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost bg-[#504DA6] text-white hover:text-black btn-xs">
                      Feedback
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCLasses;
