import usePayment from "../Hooks/usePayment";

const PaymentHistory = () => {

    const [paymentHistory] = usePayment();

    return (
        <div>
            <h1 className="text-2xl font-bold p-2">Payment History</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory && paymentHistory.map((p, i) => <tr key={i}>
                            <td>{ i < 10 ? `0${i + 1}` : i + 1}.</td>
                            <td>{ p.transactionId}</td>
                            <td>${ p.price}</td>
                            <td>{ p.status}</td>
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
        </div>
    );
};

export default PaymentHistory;