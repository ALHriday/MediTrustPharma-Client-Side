import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import usePayment from "../../Hooks/usePayment";



const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();

    const { currentUser, cartItem, setCartItem, setInvoiceData } = useAuth();

    const totalPrice = (cartItem ?? []).reduce((current, item) => current + parseFloat(item.price) * parseFloat(item.quantity), 0);

    const navigate = useNavigate();
    const [refetch] = usePayment();

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => setClientSecret(res.data.clientSecret))
        }
    }, [axiosPublic, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error);
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: currentUser?.userEmail || 'anonymous',
                    name: currentUser?.userName || 'anonymous'
                }
            }
        })


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Pay"
        }).then((result) => {
            if (result.isConfirmed) {
                if (confirmError) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Payment Error.",
                        showConfirmButton: false,
                        timer: 1500
                    });


                } else {

                    const buyerEmail = currentUser?.userEmail;
                    const buyerName = currentUser?.userName;
                    const transactionId = paymentIntent?.id;
                    const status = paymentIntent?.status;
                    const payment_method = paymentIntent?.payment_method_types;
                    const currency = paymentIntent?.currency;
                    const price = totalPrice;

                    const paymentInfo = { buyerEmail, buyerName, transactionId, price, status, payment_method, currency };

                    setInvoiceData(cartItem);

                    axiosPublic.post('/payments', paymentInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                refetch;
                                return res.data;
                            }
                        }
                        )
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Success.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    axiosPublic.post('/checkout', { userId: currentUser?._id, cartItem: cartItem });


                    navigate('/InvoicePage', { state: { paymentIntent } });
                    localStorage.removeItem('cartItem');
                    setCartItem([]);
                }
            }
        });
    };

    return (
        <div className="w-full p-4 md:w-3/5 mx-auto">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <CardElement className=""
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm my-4 btn-accent font-bold" type="submit" disabled={!stripe || !clientSecret}>
                    $ Pay
                </button>
                <p className="text-error p-2 text-center">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;