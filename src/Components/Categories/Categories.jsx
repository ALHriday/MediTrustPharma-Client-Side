import { Helmet } from "react-helmet-async";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Categories = () => {
    const { setProducts } = useAuth();
    const [data] = useData();
    const categoryData = [...new Set(data.map(d => d.category))];
    const [category, setCategory] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:2100/products?category=${category}`)
        .then(res => setProducts(res.data)
        )
    }, [category, setProducts])


    const handleCategory = (category) => {
        setCategory(category) 
    }

    return (
        <div>
            <Helmet>
                <title>MediTrust | Categories</title>
            </Helmet>

            <h1>Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
                {categoryData.map((c, i) => <Link to='/shop' onClick={() => handleCategory(c)} className="bg-slate-50 p-4 rounded-md" key={i}>{c}</Link>)}
            </div>
        </div>
    );
};

export default Categories;