import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Shop = () => {

    const { products, setSearch } = useAuth();
    // const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    return (
        <div className="w-full">
            <Helmet>
                <title>MediTrust | Shop</title>
            </Helmet>

            <div className={` ${location.pathname == '/dashboard' ? "top-[0px] justify-between" : "top-[66px] justify-center"} sticky  shadow-sm bg-slate-50 z-10 flex gap-2 items-center py-4`}>
                <div>

                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search..." />
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
                <div className="pr-4"> {location.pathname == '/dashboard' ? <p> Total Products: {products.length}</p> : ''} </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th className="text-center">Details / Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {products && products.map((product, i) => <tr key={i}>
                            <td >
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={product.image}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.title}</div>
                                        <div className="text-sm opacity-50">{product.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                ${product.price}
                            </td>
                            <td>{product.description}</td>
                            <td>
                                <div className="flex gap-2 justify-center items-center">
                                    <button className="btn btn-sm btn-accent text-white"><FaEye></FaEye></button>
                                    {location.pathname == '/dashboard' ? <>
                                        <button className="btn btn-sm btn-secondary"> <FaEdit></FaEdit> </button>
                                        <button className="btn btn-sm bg-red-600 text-white"> <FaTrash></FaTrash> </button>
                                    </> : <button className="btn btn-sm btn-secondary">Select</button>}

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

export default Shop;