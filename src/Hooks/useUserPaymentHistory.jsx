import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserPaymentHistory = () => {
    const axiosPublic = useAxiosPublic();
    const { currentUser } = useAuth();
    const { data: userPaymentHistory = [], refetch, isLoading } = useQuery({
        queryKey: ['userPaymentHistory'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${currentUser?.userEmail}`) || {};
            return res.data;
        }
    });
    return [userPaymentHistory, refetch, isLoading];
};

export default useUserPaymentHistory;