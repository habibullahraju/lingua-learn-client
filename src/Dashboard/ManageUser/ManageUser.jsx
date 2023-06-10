import React, {useState} from "react";
import useAllUser from "../../hooks/useAllUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [allUser, refetch] = useAllUser();
  const [axiosSecure] = useAxiosSecure();
  console.log(allUser);

  const handleMakeInstructor = (item) => {
    console.log(item);
    axiosSecure
      .put(`/change-role/${item?._id}`, {role: "instructor"})
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully make a Instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeAdmin = item =>{
    console.log(item);
    axiosSecure
      .put(`/change-role/${item?._id}`, {role: "admin"})
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully make a Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

  }
  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-4">Manage Users</h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Action2</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((singleUser, index) => (
                <tr key={singleUser._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleUser?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleUser?.name}</td>
                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role ? singleUser.role : "Student"}</td>
                  <th>
                    <button
                      onClick={() => handleMakeInstructor(singleUser)}
                      className={`btn bg-[#504DA6] text-white hover:text-black btn-ghost btn-xs ${
                        singleUser?.role == "instructor"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      } `}
                    >
                      Make Instructor
                    </button>
                  </th>
                  <th>
                    <button
                        onClick={()=>handleMakeAdmin(singleUser)}
                      className={`btn bg-[#504DA6] text-white hover:text-black btn-ghost btn-xs ${
                        singleUser?.role == "admin"
                          ? "bg-red-500 pointer-events-none opacity-25"
                          : "disabled"
                      } `}
                    >
                      Make Admin
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

export default ManageUser;
