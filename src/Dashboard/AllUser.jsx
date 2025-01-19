import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
// import { FaEye } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const AllUser = () => {
    const { allUser, setSearchUser } = useAuth();

    const location = useLocation();


    return (
        <div className="w-full">
            <Helmet>
                <title>MediTrust | Dashboard</title>
            </Helmet>

            <div className={` ${location.pathname == '/dashboard/all_user' ? "top-[0px]" : "top-[66px]"} sticky  shadow-sm bg-slate-50 z-10 flex justify-between items-center py-4`}>
                <div></div>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearchUser(e.target.value)} type="text" className="grow" placeholder="Search..." />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="text-xl font-bold inline-flex justify-center items-center gap-1"><FaUsers className="text-teal-500 w-10"></FaUsers> ( {allUser.length < 10 ? "0" + allUser.length : allUser.length} )</div>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center w-[120px]">Status</th>
                            <th className="text-center">Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {allUser && allUser.map((user, i) => <tr key={i}>
                            <td >
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.userName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="overflow-x-auto">{user.userEmail}</td>
                            <td>{user.role}</td>
                            <td className="w-[120px]">
                                {user.status}
                                <select className="select select-bordered select-sm w-full max-w-xs">
                                    <option value='select'>Select</option>
                                    <option value='user'>User</option>
                                    <option value='seller'>Seller</option>
                                    <option value='admin'>Admin</option>
                                </select>
                            </td>
                            <td>
                                <div className="flex gap-2 justify-center items-center">
                                    <button className="btn btn-sm bg-red-600 hover:bg-red-500 text-slate-100">Delete</button>
                                </div>

                            </td>

                        </tr>)}


                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>



        </div >
    );
};

export default AllUser;