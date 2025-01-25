import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePayment = () => {
    const axiosPublic = useAxiosPublic();
    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payments');
            return res.data;
        }
    });
    return [paymentHistory, refetch];
};

export default usePayment;