import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useOrder = () => {
    const axiosPublic = useAxiosPublic();
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const orders = axiosPublic.get('/orders').then(res => res.data).catch(error => error)
            return orders;
        }
    })
    return { orders, refetch }
};

export default useOrder;