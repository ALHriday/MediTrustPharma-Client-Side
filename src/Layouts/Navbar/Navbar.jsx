import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, signOutUser, setUser } = useAuth();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                setUser(null);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "LogOut Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            ).catch(error => error)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/'>
                    <div className="btn btn-ghost text-xl"> <div className="w-10">
                        <img className="w-full" src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                    </div> MediTrustPharma</div>
                </Link>
            </div>

            <div className="hidden md:flex justify-center items-center gap-2 mr-2">
                <Link className="btn btn-sm" to='/'>Home</Link>
                <Link className="btn btn-sm" to='/shop'>Shop</Link>
                <Link className="btn btn-sm" to='/joinUs'>Join Us</Link>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>

                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        {user ? <div>
                            <div className="w-10 h-10 rounded-full">
                                <img className="w-full h-full rounded-full object-cover"
                                    title={user?.displayName}
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div> :
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" />
                            </div>
                        }
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <li className="flex flex-col md:hidden justify-center items-start gap-1 mb-1">
                            <Link className="" to='/'>Home</Link>
                            <Link className="" to='/shop'>Shop</Link>
                            <Link className="" to='/joinUs'>Join Us</Link>
                        </li>

                        {user ? <>
                            <li><Link to='/updateProfile'>Update Profile</Link></li>
                            <li><Link to='dashboard'>Dashboard</Link></li>
                        </> : ''}

                        <li>{user ?
                            <div className="ml-2">
                                <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
                            </div>
                            :
                            <div className="flex justify-center items-center gap-2">
                                <Link className="btn btn-sm" to='/register'>Register</Link>
                                <Link className="btn btn-sm" to='/login'>LogIn</Link>
                            </div>
                        }</li>

                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;