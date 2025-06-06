import { FaCartPlus, FaDollarSign, FaHome } from "react-icons/fa";
import useSellerProduct from "../Hooks/useSellerProduct";


const SellerHome = () => {
    const [sellerProducts] = useSellerProduct();

    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4">
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaDollarSign className="w-10 h-10 font-bold text-white bg-accent p-2 rounded-md shadow-md"></FaDollarSign>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Revenue</h1>
                        <p>00</p>
                    </div>
                </div>
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaCartPlus className="w-10 h-10 font-bold text-white bg-secondary p-2 rounded-md shadow-md"></FaCartPlus>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Orders</h1>
                        <p>00</p>
                    </div>
                </div>
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaHome className="w-10 h-10 font-bold text-white bg-slate-400 p-2 rounded-md shadow-md"></FaHome>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Products</h1>
                        <p>{sellerProducts.length < 10 ? `0${sellerProducts.length}` : sellerProducts.length}</p>
                    </div>
                </div>
            </div>
    );
};

export default SellerHome;