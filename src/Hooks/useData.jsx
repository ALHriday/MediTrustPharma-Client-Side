import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
    const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://medi-trust-pharma-server.vercel.app/products`)
            .then(res => {
            setData(res.data)
                setLoading(false);
            })
    }, []);
    return [data, loading]
};

export default useData;