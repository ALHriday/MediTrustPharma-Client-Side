import useAuth from '../../Hooks/useAuth';
import useOrder from '../../Hooks/useOrder';

const Orders = () => {
    const { orders } = useOrder();
    const { currentUser } = useAuth();

    const filterData = (orders ?? []).filter(item => item.userId === currentUser?._id);

    return (
        <div>
            <h1 className='font-bold text-2xl p-2 border-b-2'>Your Order history...</h1>
            <div className='flex justify-between p-2 border-2 font-bold'>
                <h1>Transaction Id</h1>
                <h1>Status</h1>
            </div>
            {filterData.map((item, idx) => <div className='flex justify-between border border-collapse p-2' key={item._id}>

                <div>{idx + 1}. {item?._id}</div>
                <div>{item.status}</div>
            </div>
            )}
        </div>
    );
};

export default Orders;