import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const authContext = AuthProvider(AuthContext);
    return authContext;
};

export default useAuth;