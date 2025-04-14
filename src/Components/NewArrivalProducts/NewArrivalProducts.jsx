import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NewArrivalProducts = () => {
    const { data } = useAuth();

    const newArrivalProducts = [...data].slice(data.length - 8, data.length);

    return (
        <div className="my-12 flex flex-col gap-2 p-4">
            <div className="text-4xl font-bold my-2">
                New Arrivals
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {newArrivalProducts.map(product => <Link to='/shop' className="p-2 rounded-md bg-slate-50 relative" key={product._id}>

                    <div className="h-[120px]">
                        <img className="object-cover w-full h-full rounded-md" src={product?.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold">{product?.title}</p>
                        <div className="flex justify-between">
                            <p>{product?.company}</p>
                            <p className="font-bold">{product?.price}$</p>
                        </div>
                    </div>
                    <p className="absolute p-[2px] top-2 text-white right-2 rounded-md font-thin bg-[#ff2803]">New</p>
                </Link>)}
            </div>
        </div>
    );
};

export default NewArrivalProducts;