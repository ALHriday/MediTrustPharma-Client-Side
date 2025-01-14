import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";

const authContext = AuthContext(AuthProvider);

const useAuth = () => {
    return authContext;
};

export default useAuth;