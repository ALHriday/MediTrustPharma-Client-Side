import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([{name: 'Rahim', age: 20}]);
    const [loading, setLoading] = useState(true);

    const values = {
        loading,
        setLoading,
        user,
        setUser
    }
    
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;