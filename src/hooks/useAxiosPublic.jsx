import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://a-12-bms-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;