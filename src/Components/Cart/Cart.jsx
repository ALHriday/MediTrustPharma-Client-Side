import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Cart = () => {
    const { cartItem, setCartItem } = useAuth();

    const totalPrice = cartItem.reduce((current, item) => current + parseInt(item.price), 0);

    const handleDeleteItem = (id) => {
        const remainingItem = cartItem.filter(item => id !== item._id);
        localStorage.setItem('cartItem', JSON.stringify(remainingItem));
        setCartItem(remainingItem);
    }

    const handleDeleteAllItems = () => {
        localStorage.removeItem('cartItem');
        setCartItem([]);
    }

    return (
        <div>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl md:text-2xl font-bold">Your Cart Items</h1>
                
                <div className="flex gap-4 justify-center items-center">
                    <div>
                        {cartItem.length ?
                            <div onClick={handleDeleteAllItems} className="flex gap-2 justify-center items-center">
                                <button className={`btn btn-sm bg-red-600 hover:bg-red-500 text-slate-100`}>Clear All</button>
                            </div>
                            : <></>
                        }
                    </div>

                </div>
            </div>

            {cartItem.length ? <>
            <div className="overflow-x-auto">
                <table className="table text-black">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th className="text-right">Delete Item</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {cartItem && cartItem.map((item, i) => <tr key={i}>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-circle w-14 h-14 md:w-20 md:h-20">
                                        <img
                                            src={item.image}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td className="text-right">
                                <button onClick={() => handleDeleteItem(item._id)} className={`btn btn-sm bg-red-600 hover:bg-red-500 text-slate-100`}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
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
            <div className="px-4 pb-2 border-b-2">
                <div className="flex justify-end items-center gap-4">
                    {cartItem.length ? <>
                        <p className="text-[20px] md:text-[24px] text-black">
                            SubTotal: ${totalPrice}
                        </p>
                        <Link to='/payment'>
                            <button className="btn btn-accent font-bold">Pay</button>
                        </Link>
                    </>
                        : <> </>}
                </div>
            </div>
            </> : <div className="flex flex-col justify-center items-center py-2">
                <h1 className="text-2xl font-bold">No Products Available!</h1>
                 <Link className="btn btn-link" to='/shop'>Go to shop</Link></div>}
        </div>
    );
};




export default Cart;