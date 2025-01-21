import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUserData = () => {
    const axiosPublic = useAxiosPublic();
    const { searchUser } = useAuth();
    
    const { data: userData = [], refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?userName=${searchUser}`);
            return res.data;
        }
    });
    return [userData, refetch];
};

export default useUserData;