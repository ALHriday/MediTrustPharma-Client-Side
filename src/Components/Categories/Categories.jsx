import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useData from "../../Hooks/useData";
import useCategoryData from "../../Hooks/useCategoryData";

const Categories = () => {
    const axiosPublic = useAxiosPublic();
    const { setProducts } = useAuth();
    const [categoryData] = useCategoryData();

    const data = [...categoryData].slice(0, 6);

    const handleCategorySearch = (category) => {
        axiosPublic.get(`/products/${category}`)
            .then(res => setProducts(res.data))
    }

    return (
        <div className="py-6">
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>

            <h1 className="text-4xl font-bold py-4">Medicines</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data && data.map((d, i) => <Link to='/shop' onClick={() => handleCategorySearch(d.categoryName)} className="text-black relative" key={i}>
                    <div className="h-[120px] rounded-md">
                        <img className="object-cover w-full h-full rounded-md opacity-80" src={d.categoryImage} alt="" />
                    </div>
                    <div className="absolute top-[35%] left-[25%] md:left-[35%]">
                        <h1 className="font-bold text-2xl">{d.categoryName}</h1>
                    </div>
                </Link>
                )}
            </div>


        </div>
    );
};


export default Categories;