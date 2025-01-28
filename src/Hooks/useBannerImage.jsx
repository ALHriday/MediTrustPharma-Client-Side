import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBannerImage = () => {
    const axiosPublic = useAxiosPublic();
    const {data: images =[], refetch} = useQuery({
        queryKey: ['image'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bannerImage') || {};
            return res.data;
        }
    })
    return [images, refetch];
};

export default useBannerImage;