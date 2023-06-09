import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyClasses = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [myClasses, setMyClasses] = useState([]);

  if (user) {
    useEffect(() => {
      axiosSecure.get(`/my-classes/${user?.email}`).then((data) => {
        setMyClasses(data.data);
      });
    }, [user]);
  }
  const handleFeedback = item =>{
    console.log(item);
  }
  console.log(myClasses);

  return (
    <div>
      <h3 className="text-3xl text-center my-4 font-bold">My Classes List</h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Status</th>
                <th>Total Enrolled</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.map((myClass, index) => (
                <tr key={myClass._id}>
                  <th>
                    {index +1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={myClass?.image}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {myClass?.name}
                  </td>
                  <td>{myClass?.status}</td>
                  <td>{myClass?.enrolled}</td>
                  <th>
                    <button onClick={()=> handleFeedback(myClass)}  className={`btn btn-ghost text-white hover:text-black bg-[#504DA6] btn-xs ${myClass?.status !=="pending"? 'bg-red-500 pointer-events-none opacity-25': "disabled"}`}>Feedback</button>
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

export default MyClasses;
