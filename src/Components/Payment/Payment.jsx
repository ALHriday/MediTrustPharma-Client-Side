import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
    return (
        <div className="w-3/4 md:w-3/5 mx-auto my-6 rounded-md bg-slate-50 shadow-md">
            <h1 className="text-2xl font-bold pt-6 mb-8 text-center">Payment</h1>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;