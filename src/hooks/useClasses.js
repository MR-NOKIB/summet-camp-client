import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


export const useClasses = (email) => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            if(email){
                const res = await axiosPublic.get(`/classes?email=${email}`);
                return res.data;
            }
            const res = await axiosPublic.get('/classes')
            return res.data;
        }
    });
    return [refetch, classes]
};