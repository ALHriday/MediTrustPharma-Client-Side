import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategoryData = () => {
    const axiosPublic = useAxiosPublic();
    const { data: categoryData = [], refetch } = useQuery({
        queryKey: ['categoryData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/productCategory');
            return res.data;
        }
    })
    return [categoryData, refetch];
};

export default useCategoryData;