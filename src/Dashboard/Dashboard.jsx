import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaStackOverflow, FaUser, FaUsers } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";
import { useState } from "react";
import UserPaymentHistory from "./UserPaymentHistory";

const Dashboard = () => {
    const [historyBtn, setHistoryBtn] = useState(false);

    const { currentUser } = useAuth();

    if (currentUser?.role == 'user') {
        
        {
            currentUser?.role == 'user' &&
            <div className="flex flex-col justify-center items-center gap-4 py-12">
                <h1 className="text-2xl text-center">If you want to be a seller, please contact our customer care and fulfill our requirements. Thank You.</h1>
                <div className="flex flex-col md:flex-row gap-2">
                    <button className="btn btn-sm btn-primary text-white">Call: +8801234567892</button>
                    <button className="btn btn-sm btn-primary text-white">Email: Example123@gmail.com</button>
                </div>
            </div>
        }
    }

    return (
        <div className="grid-cols-1 grid md:grid-cols-4 bg-slate-50">
            <div className="col-span-1 bg-teal-500 bg-opacity-85 p-4 md:min-h-screen">
                <div className="flex flex-col gap-1 overflow-auto ">
                    <div className="w-20">
                        <img className="w-full shadow-sm" src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                    </div>
                    <h1 className="text-2xl md:text-xl font-bold mb-4 ">MediTrustPharma</h1>
                </div>
                <div className="flex flex-wrap md:flex-col gap-2 overflow-x-auto">
                    {currentUser.role == 'admin' && <>
                        <Link className="btn " to='/dashboard'><FaStackOverflow className="text-teal-500 "></FaStackOverflow>Admin Home</Link>
                        <Link className="btn " to='/dashboard/all_user'><FaUsers className="text-teal-500 "></FaUsers>All User</Link>
                        <Link className="btn " to='/dashboard/shop'> <GiDatabase></GiDatabase> Products</Link>
                        <Link className="btn " to='/dashboard/paymentHistory'>Total PaymentHistory</Link>
                        <Link className="btn " to='/dashboard/add_product'> Add Product</Link>
                        <Link className="btn " to='/dashboard/banner_image'>Update Banner Image</Link>
                        <Link className="btn " to='/dashboard/product_category'>Change Product Category</Link>
                    </>}
                    {currentUser.role == 'seller' && <>
                        <Link className="btn " to='/dashboard'> Seller Home</Link>
                        <Link className="btn " to='/dashboard/shop'> My Product</Link>
                        <Link className="btn " to='/dashboard/add_product'> Add Product</Link>
                    </>}
                    {/* {currentUser.role == 'user' && <> */}
                    <button onClick={() => setHistoryBtn(!historyBtn)} className="btn">Payment History</button>
                    {/* </>} */}
                </div>
                <div className="w-full mt-4 md:mt-8">
                    <Link className="btn btn-neutral w-full" to='/'>Go to Home</Link>
                </div>
            </div>
            <div className="md:col-span-3 flex flex-col p-4 min-h-screen ">
                <div className="flex flex-col border-b-2 border-black gap-1 py-4">
                    <h1 className="text-2xl md:text-4xl font-bold">Hi, {currentUser?.userName}.</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl md:text-4xl font-bold"> Welcome to Dashboard </h1>
                        <p className="text-teal-600 inline-flex justify-center items-center gap-2 text-xl"> <FaUser></FaUser> {currentUser?.role}</p>
                    </div>
                </div>

                <div className="px-4 overflow-auto max-h-screen">
                    {currentUser?.role !== 'user' &&
                        <Outlet></Outlet>}
                    {historyBtn ? <UserPaymentHistory/> : <></> }
                    {/* {currentUser?.role == 'user' &&
                        <div className="flex flex-col justify-center items-center gap-4 py-12">
                            <h1 className="text-2xl text-center">If you want to be a seller, please contact our customer care and fulfill our requirements. Thank You.</h1>
                            <div className="flex flex-col md:flex-row gap-2">
                                <button className="btn btn-sm btn-primary text-white">Call: +8801234567892</button>
                                <button className="btn btn-sm btn-primary text-white">Email: Example123@gmail.com</button>
                            </div>
                        </div>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;