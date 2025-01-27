import { FaCartPlus, FaDollarSign, FaHome, FaUsers } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useUserData from "../Hooks/useUserData";
import usePayment from "../Hooks/usePayment";
import SellerHome from "./SellerHome";

const AdminHome = () => {
    const { products, currentUser } = useAuth();
    const [userData] = useUserData();
    const [paymentHistory] = usePayment();

    const totalRevenue = paymentHistory.reduce((current, item) => current + parseInt(item.price), 0);


    return (
        <div>
            {currentUser?.role == 'seller' ?
                <SellerHome></SellerHome> :

                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
                    <div className="bg-primary rounded-md flex gap-4 md:gap-2 p-4">
                        <div className="flex justify-center items-center">
                            <FaDollarSign className="w-20 h-20 lg:h-28 lg:w-28 lg:text-3xl text-2xl font-bold text-white bg-accent p-2 rounded-md shadow-md"></FaDollarSign>
                        </div>
                        <div className="text-white text-xl md:text-2xl">
                            <h1 className="font-bold">Revenue</h1>
                            <p>${totalRevenue}</p>
                        </div>
                    </div>
                    <div className="bg-primary rounded-md flex gap-4 md:gap-2 p-4">
                        <div className="flex justify-center items-center">
                            <FaCartPlus className="w-20 h-20 lg:h-28 lg:w-28 lg:text-3xl text-2xl font-bold text-white bg-secondary p-2 rounded-md shadow-md"></FaCartPlus>
                        </div>
                        <div className="text-white text-xl md:text-2xl">
                            <h1 className="font-bold">Orders</h1>
                            <p>{paymentHistory.length}</p>
                        </div>
                    </div>
                    <div className="bg-primary rounded-md flex gap-4 md:gap-2 p-4">
                        <div className="flex justify-center items-center">
                            <FaHome className="w-20 h-20 lg:h-28 lg:w-28 lg:text-3xl text-2xl font-bold text-white bg-slate-400 p-2 rounded-md shadow-md"></FaHome>
                        </div>
                        <div className="text-white text-xl md:text-2xl">
                            <h1 className="font-bold">Products</h1>
                            <p>{products.length < 10 ? `0${products.length}` : products.length}</p>
                        </div>
                    </div>
                    <div className="bg-primary rounded-md flex gap-4 md:gap-2 p-4">
                        <div className="flex justify-center items-center">
                            <FaUsers className="w-20 h-20 lg:h-28 lg:w-28 lg:text-3xl text-2xl font-bold text-white bg-success p-2 rounded-md shadow-md"></FaUsers>
                        </div>
                        <div className="text-white text-xl md:text-2xl">
                            <h1 className="font-bold">Users</h1>
                            <p>{userData.length}</p>
                        </div>
                    </div>

                </div>
            }
        </div>

    );
};

export default AdminHome;