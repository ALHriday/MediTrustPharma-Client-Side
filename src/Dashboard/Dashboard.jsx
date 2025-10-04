import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaUser, FaUsers } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";
import { FaStackOverflow } from "react-icons/fa6";

const Dashboard = () => {

    const { currentUser } = useAuth();

    // set the first div like a menubar when toggle the menu button

    return (
        <div className="grid-cols-1 grid md:grid-cols-4 bg-slate-50">
            <div className="col-span-1 bg-teal-500 bg-opacity-85 p-4 md:min-h-screen md:flex md:flex-col md:justify-between">
                <div>
                    <div className="flex items-center gap-1 overflow-auto my-4 md:my-2">
                        <div className="w-20">
                            <img className="w-full" src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" />
                        </div>
                        <h1 className="text-2xl md:text-xl font-bold mb-4 ">MediTrust Pharma</h1>
                    </div>
                    <div className="flex md:flex-col gap-2 overflow-x-auto no-scrollbar md:p-2">
                        <Link className="btn" to='/dashboard'><FaStackOverflow className="text-teal-500 "></FaStackOverflow>Statistic</Link>

                        {currentUser?.role == 'admin' && <>
                            <Link className="btn" to='/dashboard/all_user'><FaUsers className="text-teal-500 "></FaUsers>All User</Link>
                            <Link className="btn" to='/dashboard/shop'> <GiDatabase></GiDatabase> Products</Link>
                            <Link className="btn" to='/dashboard/paymentHistory'>Total PaymentHistory</Link>
                            <Link className="btn" to='/dashboard/add_product'> Add Product</Link>
                            <Link className="btn" to='/dashboard/banner_image'>Update Banner Image</Link>
                            <Link className="btn" to='/dashboard/product_category'>Change Product Category</Link>
                        </>}
                        {currentUser?.role == 'seller' && <>
                            <Link className="btn" to='/dashboard/shop'> My Product</Link>
                            <Link className="btn" to='/dashboard/add_product'> Add Product</Link>
                        </>}
                        <Link className="btn" to='/dashboard/orders'>Orders</Link>
                        <Link className="btn" to='/dashboard/userPaymentHistory'>Payment History</Link>
                    </div>
                </div>
                <div className="w-full mt-4 md:mt-8 hidden md:flex">
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

                <div className="px-4 overflow-auto no-scrollbar max-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="w-full mt-4 md:mt-8 flex md:hidden">
                <Link className="btn btn-neutral w-full !rounded-none" to='/'>Go to Home</Link>
            </div>
        </div>
    );
};


export default Dashboard;