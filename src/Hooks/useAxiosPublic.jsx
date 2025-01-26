import axios from "axios";

const axiosPublic = axios.create({
    baseURL: ' https://medi-trust-pharma-server.vercel.app'
})

// https://medi-trust-pharma-server.vercel.app
// http://localhost:2100

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;