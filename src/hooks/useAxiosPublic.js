import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'https://summer-camp-server-mr-nokib-nojom-uddins-projects.vercel.app'
    });
    return axiosPublic;
};

export default useAxiosPublic;