import React from "react";
import {useQuery} from "@tanstack/react-query";
import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const {user, loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {refetch, data: classes = []} = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      return res.data;
    },
  });

  return [classes, refetch];
};

export default useClasses;
