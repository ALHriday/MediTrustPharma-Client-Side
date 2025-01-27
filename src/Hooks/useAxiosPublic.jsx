import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:2100'
})

// https://medi-trust-pharma-server.vercel.app
// http://localhost:2100

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;