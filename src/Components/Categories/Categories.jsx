import { Helmet } from "react-helmet-async";
import useData from "../../Hooks/useData";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Categories = () => {
    const axiosPublic = useAxiosPublic();
    const { setProducts } = useAuth();
    const [data] = useData();
    const categoryData = [...new Set(data.map(d => d.category))];

    const handleCategory = (category) => {
        axiosPublic.get(`/products/${category}`)
            .then(res => setProducts(res.data))
    }

    return (
        <div className="py-6">
            <Helmet>
                <title>MediTrust | Categories</title>
            </Helmet>

            <h1 className="text-4xl font-bold py-4">Medicines</h1>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-2 ">
                {categoryData.map((c, i) => <Link to='/shop' onClick={() => handleCategory(c)} className="bg-slate-50 p-4 rounded-md" key={i}>{c}</Link>)}
            </div>
        </div>
    );
};

export default Categories;