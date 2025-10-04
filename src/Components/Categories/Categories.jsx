import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useCategoryData from "../../Hooks/useCategoryData";

const Categories = () => {
    const { setCategory, data: allData, setProducts } = useAuth();
    const [categoryData] = useCategoryData();

    const data = [...categoryData].slice(0, 9);

    const handleCategorySearch = (category) => {
        setCategory(category);
    }

    return (
        <div className="p-4">
            <Helmet>
                <title>MediTrust | Home</title>
            </Helmet>

            <h1 className="text-4xl font-bold py-4">Categories</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Link to='/shop' onClick={() => setProducts(allData)} className="text-black" >
                    <div className="relative rounded-md">
                        <div className="h-[80px] rounded-t-md rounded-r-md shadow-inner flex justify-center items-center -mb-2">
                            <img className="object-cover w-full h-full rounded-md opacity-70 z-10" src='https://media.istockphoto.com/id/1224142418/vector/doctors-prescribing-various-meds-for-patient-big-pills-capsules-blisters-glass-bottles-with.jpg?s=612x612&w=0&k=20&c=Nxfs0hecA03eNcAqUGoFxsdu6uB08uxkEOPNXWC7RfU=' alt="All Medicines" />
                        </div>
                        <div className="rounded-md">
                            <h1 className="font-bold text-sm sm:text-xl rounded-md bg-slate-50 opacity-85 shadow-inner p-2">All Medicines</h1>
                        </div>
                    </div>
                </Link>

                {data && data.map((d, i) => <Link to='/shop' onClick={() => handleCategorySearch(d.categoryName)} className="text-black" key={i}>
                    <div className="relative rounded-md">
                        <div className="h-[80px] rounded-t-md rounded-r-md shadow-inner flex justify-center items-center -mb-2">
                            <img className="object-cover w-full h-full rounded-md opacity-70 z-10" src={d.categoryImage} alt={d.categoryName}
                                // eslint-disable-next-line react/no-unknown-property
                                fetchpriority="high"
                            />
                        </div>
                        <div className="rounded-md overflow-x-auto">
                            <h1 className="font-bold text-sm sm:text-xl rounded-md bg-slate-50 opacity-85 shadow-inner p-2 text-balance">{d.categoryName.length > 15 ? d.categoryName.slice(0, 12).concat('...') : d.categoryName}</h1>
                        </div>
                    </div>
                </Link>
                )}
            </div>
        </div>
    );
};


export default Categories;