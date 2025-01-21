import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useData = () => {
    const axiosPublic = useAxiosPublic();

    const {data: data = [], isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });

    return [data, isLoading];
};

export default useData;