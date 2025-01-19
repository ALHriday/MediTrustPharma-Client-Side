import useCart from "../../Hooks/useCart";

const Cart = () => {

    const [cart] = useCart();

    return (
        <div>
            <h1>This is Cart Component</h1>
            <h1>Product Length { cart.length}</h1>
        </div>
    );
};

export default Cart;