import React, {useContext, useEffect, useState} from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {AuthContext} from "../../Providers/AuthProvider";
import EnrollClassCard from "./EnrollClassCard";

const EnrolledClasses = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [myEnrollClasses, setMyEnrollClasses] = useState([]);
  const [allClass, setAllClass] = useState([]);
  const myIdArray = [];

  useEffect(() => {
    axiosSecure.get("/all-classes").then((data) => {
      setAllClass(data.data);
    });
  }, []);
  useEffect(() => {
    axiosSecure.get(`/enrolled-classes/${user?.email}`).then((data) => {
      setMyEnrollClasses(data.data);
    });
  }, []);
  myEnrollClasses.map(item => myIdArray.push(item.enrolledClassesId))
  console.log(myEnrollClasses);
  console.log(myIdArray);
  // myEnrollClasses.map((item) => item.enrolledClassesId.map((id) => myIdArray.push(id)));
  const myClass = allClass.filter((product) => myIdArray.includes(product._id));
 

  return (
    <div className="mx-4">
      <h3 className="text-3xl text-center font-bold my-4">
        My Enrolled Classes
      </h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div className="grid md:grid-cols-2 gap-10">
        {
            myClass.map(myCls => <EnrollClassCard
                key={myCls._id}
                myCls={myCls}
            ></EnrollClassCard>)
        }
      </div>
    </div>
  );
};

export default EnrolledClasses;
