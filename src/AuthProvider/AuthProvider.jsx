import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Auth/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [passValidation, setPassValidation] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [allUser, setAllUser] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [searchUser, setSearchUser] = useState([]);

    console.log(allUser);
    

    const axiosPublic = useAxiosPublic();

    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const createAccountWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithEmailAndPassWord = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const togglePassword = (status) => {
        if (status.current.type === 'password') {
            status.current.type = 'text';
            setShowPass(true);
        } else {
            status.current.type = 'password';
            setShowPass(false);
        }
    }

    useEffect(() => {
        if (user) {
            axiosPublic.get(`/users/${user?.email}`)
            .then(res => setCurrentUser(res.data)
            ) 
        }   
    }, [axiosPublic, user]);

    useEffect(() => {
        axiosPublic.get(`/users`)
            .then(res => setAllUser(res.data)
            )
    }, [axiosPublic]);

    useEffect(() => {
        axiosPublic.get(`/products?title=${search}`)
            .then(res => setProducts(res.data)
            )
    }, [axiosPublic, search]);

    useEffect(() => {
        axiosPublic.get(`/users?userName=${searchUser}`)
     .then(res => setAllUser(res.data))   
    }, [axiosPublic, searchUser])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, []);

    const values = {
        loading,
        setLoading,
        user,
        setUser,
        showPass,
        signInWithGoogle,
        signOutUser,
        createAccountWithEmailAndPass,
        signInWithEmailAndPassWord,
        togglePassword,
        errorMessage,
        setErrorMessage,
        passValidation,
        setPassValidation,
        products,
        setProducts,
        search,
        setSearch,
        allUser,
        setAllUser,
        currentUser,
        setCurrentUser,
        searchUser,
        setSearchUser

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;