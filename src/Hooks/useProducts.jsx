// // import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";
// import useAuth from "./useAuth";
// import { useEffect } from "react";

// const useProducts = () => {
//     const axiosPublic = useAxiosPublic();
//     const { search, setProductData, category } = useAuth();

//     useEffect(() => {
//         if (search) {
//             axiosPublic.get(`products?title=${search}`).then(res => setProductData(res.data))  
//         }
//         if (category) {
//             axiosPublic.get(`products/${category}`).then(res => setProductData(res.data))
//         }
        
//     }, [axiosPublic, search, setProductData, category])

//    return
// };

// export default useProducts;