import axios from "axios";
import { useEffect, useState } from "react";


const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:2100/products')
            .then(res => {
            setData(res.data)
                setLoading(false);
            })
    }, []);
    return [data, loading]
};

export default useData;