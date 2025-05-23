import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const InvoicePage = () => {
    const { invoiceData, currentUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const paymentIntent = location.state?.paymentIntent;

    if (!paymentIntent) {
        return <p className='text-2xl text-center my-12'>Error: No Payment details Available.</p>
    }

    const handlePrint = () => {
        window.print();
    }

    return (
        <div>
            <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px" }}>
                <h1 className='my-2'>Invoice</h1>
                <div className='flex justify-between'>
                    <div>
                        <p><strong>Invoice Number:</strong> INV-001</p>
                        <p><strong>Transaction Id:</strong> {paymentIntent?.id}</p>
                        <p><strong>Status:</strong> {paymentIntent?.status}</p>

                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>

                        <h2>Customer Details</h2>
                        <p>Name: {currentUser?.userName}</p>
                        {/* <p>Address: 1234 Elm Street</p> */}
                    </div>
                    <div className='flex flex-col'>
                        <div className='w-10 h-10 rounded-md'>
                            <img className='w-full h-full rounded-md object-cover' src="https://img.icons8.com/?size=100&id=108787&format=png&color=000000" alt="" />
                        </div>
                        <h1>MediTrust</h1>
                    </div>
                </div>

                <table width="100%" border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {invoiceData && invoiceData.map((item, i) =>
                            <tr key={i}>
                                <td>{item?.title}</td>
                                <td>1</td>
                                <td>{item?.price}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot className='text-center'>
                        <tr>
                            <td colSpan="3" style={{ textAlign: "right" }}><strong>Grand Total</strong></td>
                            <td>${paymentIntent?.amount / 100}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className='flex justify-center items-center gap-2 py-6'>
                <button className='btn btn-primary' onClick={() => handlePrint()}>Print Invoice</button>
                <button className='btn btn-primary' onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
    );
};

export default InvoicePage;