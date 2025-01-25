import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useSellerProduct = () => {

    const { currentUser } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: sellerProducts = [], refetch } = useQuery({
        queryKey: ['sellerProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/productItem/${currentUser?.userEmail}`);
            return res.data;
        }
    })
    return [sellerProducts, refetch];
};

export default useSellerProduct;