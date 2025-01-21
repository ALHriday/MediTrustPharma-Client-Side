import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaProductHunt, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
    
    const { currentUser } = useAuth();

    return (
        <div className="grid grid-cols-4 bg-slate-50">
            <div className="col-span-1 bg-teal-500 bg-opacity-85 p-4 h-screen">
                <div className="flex flex-col gap-1 overflow-auto ">
                    <div className="w-20">
                        <img className="w-full shadow-sm" src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-4 ">MediTrustPharma</h1>
                </div>
                <div className="flex flex-col gap-2 overflow-x-auto">
                    {currentUser.role == 'admin' ? <>
                        <Link className="btn " to='/dashboard/all_user'><FaUsers className="text-teal-500 "></FaUsers>All User</Link>
                        <Link className="btn " to='/dashboard'> <FaProductHunt></FaProductHunt> Products</Link>
                        <Link className="btn " to='/dashboard/add_product'> Add Product</Link>
                        <Link className="btn " to='/dashboard/update_product'>Update Product</Link>
                        <Link className="btn " to='/dashboard/banner_image'>Banner Image Update</Link>
                    </> : <>
                        <Link className="btn " to='/dashboard/add_product'> Add Product</Link>
                        <Link className="btn " to='/dashboard/update_product'>Update Product</Link>
                    </>}
                </div>
                <div className="w-full mt-8">
                    <Link className="btn btn-neutral w-full" to='/'>Go to Home</Link>
                </div>
            </div>
            <div className="col-span-3 flex flex-col p-4 h-screen ">
                <div className="flex flex-col border-b-2 border-black gap-1 py-4">
                    <h1 className="text-2xl md:text-4xl font-bold">Hi, {currentUser.userName}.</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl md:text-4xl font-bold"> Welcome to Dashboard </h1>
                        <p className="text-teal-600 inline-flex justify-center items-center gap-2 text-xl"> <FaUser></FaUser> {currentUser.role}</p>
                    </div>
                </div>

                <div className="px-4 overflow-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;