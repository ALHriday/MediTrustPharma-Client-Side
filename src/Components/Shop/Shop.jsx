import { Helmet } from "react-helmet-async";
// import useData from "../../Hooks/useData";
// import useAuth from "../../Hooks/useAuth";
import useAuth from "../../Hooks/useAuth";

const Shop = () => {
    // const [data] = useData();

    const { products} = useAuth();


    return (
        <div className="w-full">
            <Helmet>
                <title>MediTrust | Shop</title>
            </Helmet>
            <div className=" flex justify-center items-center py-4">
                <input className="p-2" type="text" placeholder="Search..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">

                {
                    products.map(d => <div className="grid grid-cols-3 gap-2 p-4 shadow-md" key={d._id}>
                        <div className="rounded-md">
                            <img className="w-full rounded-md" src={d.image} alt="" />
                        </div>
                        <div className="col-span-2 p-2">
                            <p className="font-bold mb-1">{d.title}</p>
                            <p>${d.price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Shop;