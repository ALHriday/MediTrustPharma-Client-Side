import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useUserData from "../Hooks/useUserData";
import useAuth from "../Hooks/useAuth";


const AllUser = () => {
    const { setSearchUser } = useAuth();
    const [userData, refetch] = useUserData();
    const axiosPublic = useAxiosPublic();

    const location = useLocation();

    const handleSearchUser = (e) => {
        setSearchUser(e.target.value);
        refetch();
    }

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleUpdateUser = (value, user) => {

        const userInfo = { role: value, sellerEmail: user.userEmail, sellerName: user.userName };
        const userRole = { role: value, sellerEmail: '', sellerName: '' }
        if (value !== 'select') {
            axiosPublic.put(`/user/${user._id}`, value === 'user' ? userRole : userInfo)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Updated!",
                            text: "User Role Updated.",
                            icon: "success"
                        });
                        refetch();
                    }
                })
        }
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>MediTrust | Dashboard</title>
            </Helmet>

            <div className={` ${location.pathname == '/dashboard/all_user' ? "top-[0px]" : "top-[66px]"} sticky  shadow-sm bg-slate-50 z-10 flex justify-between items-center py-4`}>
                <div></div>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => handleSearchUser(e)} type="text" className="grow" placeholder="Search..." />
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
                <div className="text-xl font-bold inline-flex justify-center items-center gap-1"><FaUsers className="text-teal-500 w-10"></FaUsers> ( {userData.length < 10 ? "0" + userData.length : userData.length} )</div>
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

                        {userData && userData.map((user, i) => <tr key={i}>
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
                                <select onClick={(e) => handleUpdateUser(e.target.value, user)} className="select select-bordered select-sm w-full max-w-xs">
                                    <option value='select'>Select</option>
                                    <option value='user'>User</option>
                                    <option value='seller'>Seller</option>
                                    <option value='admin'>Admin</option>
                                </select>
                            </td>
                            <td>
                                <div onClick={() => handleDeleteUser(user._id)} className="flex gap-2 justify-center items-center">
                                    <button className={`btn btn-sm bg-red-600 hover:bg-red-500 text-slate-100`}>Delete</button>
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