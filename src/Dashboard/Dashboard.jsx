import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);

    return (
        <div className="grid grid-cols-4 bg-slate-50">
            <div className="col-span-1 bg-slate-200 p-4 h-screen">
                <div className="flex flex-col gap-1 overflow-auto ">
                    <div className="w-20">
                        <img className="w-full" src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-4">MediTrustPharma</h1>
                </div>
                <div className="flex flex-col gap-2 ">
                    <Link className="btn btn-sm" to='/'>Home</Link>
                    <Link className="btn btn-sm" to='/dashboard/add_product'>Add Product</Link>
                    <Link className="btn btn-sm" to='/dashboard/update_product'>Update Product</Link>
                </div>
            </div>
            <div className="col-span-3 flex flex-col p-4 h-screen ">
                <h1 className="text-4xl font-bold border-b-2 border-black py-4">Hi, {currentUser.userName}. <br /> Welcome to Dashboard</h1>
                <div className="p-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;