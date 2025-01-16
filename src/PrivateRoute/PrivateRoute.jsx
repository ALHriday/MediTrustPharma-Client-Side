import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center">
            <span className="text-center loading loading-bars loading-md"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;