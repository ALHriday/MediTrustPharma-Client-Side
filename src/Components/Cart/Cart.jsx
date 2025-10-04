import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Cart = () => {
    const { cartItem, setCartItem, products, setProducts } = useAuth();

    const totalAmount = (cartItem ?? []).reduce((current, item) => current + parseFloat(item.price) * parseFloat(item.quantity), 0);

    const handleDeleteItem = (id) => {
        const remainingItem = cartItem?.filter(item => id !== item._id);
        setCartItem(remainingItem);
        localStorage.setItem('cartItem', JSON.stringify(remainingItem));
    }

    const updateQuantity = (id, type) => {
        const updatedCart = (cartItem ?? []).map(item => {
            if (item._id === id) {
                const product = (products ?? []).find(p => p._id === id);
                if (!product) return item; // product not found
                if (type === "increment" && item.quantity < product.quantity) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                if (type === "decrement" && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });

        const updatedProducts = (products ?? []).map(item => {

            if (item._id === id) {
                if (type === "increment" && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 }; // decrement stock
                }
                if (type === "decrement") {
                    return { ...item, quantity: item.quantity + 1 }; // increment stock back
                }
            }
            console.log('Product', item);
            return item;
        });

        setCartItem(updatedCart);
        setProducts(updatedProducts);
        localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    };


    return (
        <div>
            {cartItem?.length > 0 ? <>
                <div className="overflow-x-auto">
                    <table className="table text-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Price * Quantity</th>
                                <th>Delete Item</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {(cartItem ?? []).map(item => <tr key={item._id}>
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
                                <td>
                                    <button className="btn btn-sm" onClick={() => updateQuantity(item?._id, 'decrement')} disabled={item.quantity === 1}>-</button>
                                    <button className="btn btn-sm mx-2">{item.quantity}</button>
                                    <button className="btn btn-sm" onClick={() => updateQuantity(item?._id, 'increment')} disabled={item.quantity === 10}>+</button>
                                </td>
                                <td className="font-bold">${parseFloat(item.quantity) * parseFloat(item.price)}</td>
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
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="px-4 pb-2 border-b-2">
                    <div className="flex justify-end items-center gap-4">
                        {cartItem?.length ? <>
                            <p className="text-[20px] md:text-[24px] text-black">
                                SubTotal: ${totalAmount ? totalAmount : '00'}
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