import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Auth/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast, ToastContainer } from "react-toastify";
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
    const [currentUser, setCurrentUser] = useState([]);
    const [searchUser, setSearchUser] = useState([]);
    const [images, setImages] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [category, setCategory] = useState('');
    const [invoiceData, setInvoiceData] = useState([]);


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

    const notify = (text) => toast(text);

    useEffect(() => {
        if (user) {
            axiosPublic.get(`/users/${user?.email}`)
                .then(res => {
                    setCurrentUser(res.data);
                    setLoading(false);
                }
                )
        }
    }, [axiosPublic, user]);


    useEffect(() => {
        if (category) {
            axiosPublic.get(`products/${category}`).then(res => setProducts(res.data))
        }
    }, [axiosPublic, category])

    useEffect(() => {
        if (search) {
            axiosPublic.get(`products?title=${search}`).then(res => setProducts(res.data))
        } else {
            axiosPublic.get(`products`).then(res => setProducts(res.data))
        }
    }, [axiosPublic, search])

    // useEffect(() => {
    //     axiosPublic.get(`/productItem/${currentUser?.userEmail}`)
    //     .then(res => setSellerProducts(res.data))
    // }, [axiosPublic, currentUser?.userEmail])

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
        currentUser,
        setCurrentUser,
        searchUser,
        setSearchUser,
        images,
        setImages,
        cartItem,
        setCartItem,
        notify,
        category,
        setCategory,
        invoiceData,
        setInvoiceData

    }

    return (
        <AuthContext.Provider value={values}>
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;