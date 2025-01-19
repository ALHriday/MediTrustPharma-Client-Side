import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useData = () => {
    const axiosPublic = useAxiosPublic();
    const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosPublic.get(`/products`)
            .then(res => {
            setData(res.data)
                setLoading(false);
            })
    }, [axiosPublic]);
    return [data, loading]
};

export default useData;