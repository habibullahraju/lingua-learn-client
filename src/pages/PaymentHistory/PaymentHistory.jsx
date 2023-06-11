import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [paymentClasses, setPaymentClasses] = useState([]);
  useEffect(() => {
    if (user && user?.email) {
      axiosSecure.get(`/payment-history/${user?.email}`).then((data) => {
        setPaymentClasses(data.data);
      });
    }
  }, [user]);
  return (
    <div>
      <h3 className="text-3xl text-center my-4 font-bold">Payments History</h3>
      <div className="divider after:bg-black before:bg-black"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {paymentClasses.map((paymentClass, index) => (
                <tr key={paymentClass._id}>
                  <th>{index+1}</th>
                  <td>{paymentClass?.itemsName?.map((cName,idx) =><p key={idx}>{cName}</p>)}</td>
                  <td>{paymentClass?.email}</td>
                  <td>{paymentClass?.transactionId}</td>
                  <td>{paymentClass?.data}</td>
                  <td>{paymentClass?.price}</td>
                  <td>{paymentClass?.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
