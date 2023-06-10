import {useQuery} from "@tanstack/react-query";
import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useAllUser = () => {
  const {user, loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {refetch, data: allUser = []} = useQuery({
    queryKey: ["allUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/all-users`);
      return res.data;
    },
  });

  return [allUser, refetch];
};

export default useAllUser;
