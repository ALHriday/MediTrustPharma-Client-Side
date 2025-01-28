import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useCategoryData from "../../Hooks/useCategoryData";

const Categories = () => {
    const {  setCategory } = useAuth();
    const [categoryData] = useCategoryData();

    const data = [...categoryData].slice(0, 9);

    const handleCategorySearch = (category) => {
        setCategory(category);
    }

    return (
        <div className="py-6 px-4">
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>

            <h1 className="text-4xl font-bold py-4">Product Categories</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data && data.map((d, i) => <Link to='/shop' onClick={() => handleCategorySearch(d.categoryName)} className="text-black relative" key={i}>
                    <div className="h-[120px] rounded-md shadow-inner">
                        <img className="object-cover w-full h-full rounded-md opacity-70" src={d.categoryImage} alt="" />
                    </div>
                    <div className="absolute top-[35%] left-[25%] sm:left-[35%]">
                        <h1 className="font-bold text-sm sm:text-xl  bg-slate-50 opacity-85 shadow-inner p-2 rounded-md">{d.categoryName}</h1>
                    </div>
                </Link>
                )}
            </div>
        </div>
    );
};


export default Categories;