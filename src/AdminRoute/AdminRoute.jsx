import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
    
    const { user, currentUser, loading } = useAuth();

    console.log(currentUser.role);
    
    if (loading) {
        return <div className="flex justify-center items-center">
            <span className="text-center loading loading-bars loading-md"></span>
        </div>
    }

    if (user && currentUser?.role == 'admin') {
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default AdminRoute;