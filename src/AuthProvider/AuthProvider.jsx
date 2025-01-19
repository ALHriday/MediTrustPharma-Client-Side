import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Auth/firebase.init";
import axios from "axios";
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
        axios.get(`http://localhost:2100/users`)
        .then(res => setAllUser(res.data)
        )
    }, [])

    useEffect(() => {
        axios.get(`https://medi-trust-pharma-server.vercel.app/products?title=${search}`)
            .then(res => setProducts(res.data)
            )
    }, [search])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

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
        setAllUser

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;