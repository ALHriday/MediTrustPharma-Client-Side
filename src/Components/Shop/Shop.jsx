import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { GiDatabase } from "react-icons/gi";
import useSellerProduct from "../../Hooks/useSellerProduct";

const Shop = () => {
    const { setSearch, cartItem, setCartItem, notify, products, setProducts, currentUser } = useAuth();

    const [sellerProducts, refetch] = useSellerProduct();

    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleShowDetails = (product) => {

        Swal.fire({
            html: `<div class="flex flex-col justify-center items-center p-2 gap-2">
        <div class="h-40">
            <img class="w-full h-full object-cover" src="${product?.image}" />
        </div>
        <div class="flex flex-col gap-1">
            <h1 class="font-bold">${product?.title}</h1>
            <p>$${product?.price}</p>
            <p>Quantity: ${product?.quantity}</p>
            <p>Company: ${product?.company}</p>
            <p>${product?.description}</p>
        </div>

    </div>`
        });
    }


    const handleDeleteProduct = (id) => {

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
                axiosPublic.delete(`/product/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                            const remainingProduct = products.filter(p => p._id !== id);
                            setProducts(remainingProduct);
                        }
                    }
                    )
            }
        });
    }
    const handleSearch = (e) => {
        setSearch(e.target.value);
        // refetch();
    }

    const handleAddToCart = (productItem, id) => {
        const currentProduct = (cartItem || []).find(p => id === p._id);

        if (currentProduct) {
            return notify(`${productItem.title} already Exist.`);
        }

        const { title, image, _id, price } = productItem;
        const quantity = 1;
        const item = { title, image, _id, price: parseFloat(price), quantity: quantity }
        setCartItem([...cartItem, item]);
        localStorage.setItem('cartItem', JSON.stringify([...cartItem, item]));
        notify(`${productItem?.title || ''} added to Cart`);
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>MediTrust | Shop</title>
            </Helmet>
            {currentUser?.role == 'seller' && location.pathname == '/dashboard/shop' ?
                <> </> : <>
                    <div className={` ${location.pathname == '/dashboard/shop' ? "top-[0px] justify-between" : "top-[66px] justify-center"} sticky shadow-sm bg-slate-50 z-10 flex gap-2 items-center py-4`}>

                        <div className="hidden md:flex">

                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input onChange={(e) => handleSearch(e)} type="text" className="grow" placeholder="Search..." />
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
                        <div className="pr-4 font-bold"> {location.pathname == '/dashboard/shop' ? <p className="inline-flex justify-center items-center text-2xl font-bold"> <GiDatabase></GiDatabase> {products.length < 10 ? `0${products.length}` : `${products.length}`}</p> : ''}  </div>
                    </div>
                </>}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className="text-center">Details / Cart</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {currentUser?.role == 'seller' && location.pathname == '/dashboard/shop' ? <>

                            {sellerProducts && sellerProducts.map((product, i) => <tr key={i}>
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
                                <td>{product?.quantity}</td>
                                <td>
                                    <div className="flex gap-2 justify-center items-center">
                                        <button onClick={() => handleShowDetails(product)} className="btn btn-sm btn-accent text-white"><FaEye></FaEye></button>
                                        {location.pathname == '/dashboard/shop' ? <>
                                            <Link to={`/dashboard/update_product/${product._id}`} className="btn btn-sm btn-secondary"> <FaEdit></FaEdit> </Link>
                                            <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm bg-red-600 text-white"> <FaTrash></FaTrash> </button>
                                        </> : <button onClick={() => handleAddToCart(product, product._id)} className="btn btn-sm btn-secondary">Select</button>}

                                    </div>
                                </td>
                            </tr>)}
                        </> : <>

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
                                <td>{product?.quantity}</td>
                                <td>
                                    <div className="flex gap-2 justify-center items-center">
                                        <button onClick={() => handleShowDetails(product)} className="btn btn-sm btn-accent text-white"><FaEye></FaEye></button>
                                        {location.pathname == '/dashboard/shop' ? <>
                                            <Link to={`/dashboard/update_product/${product._id}`} className="btn btn-sm btn-secondary"> <FaEdit></FaEdit> </Link>
                                            <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm bg-red-600 text-white"> <FaTrash></FaTrash> </button>
                                        </> : <button onClick={() => handleAddToCart(product, product._id)} className="btn btn-sm btn-secondary">Select</button>}

                                    </div>
                                </td>
                            </tr>)}
                        </>}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
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