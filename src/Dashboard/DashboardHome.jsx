import useAuth from "../Hooks/useAuth";
import SellerHome from "./SellerHome";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

const DashboardHome = () => {
    const {currentUser} = useAuth();
    
    return (
        <div>
            {currentUser?.role === 'user' && <UserHome></UserHome>}
            {currentUser?.role === 'seller' && <SellerHome></SellerHome>}
            {currentUser?.role === 'admin' && <AdminHome></AdminHome>}
        </div>
    );
};

export default DashboardHome;