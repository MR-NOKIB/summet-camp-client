import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


export const useClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/classes')
            return res.data;
        }
    });
    return [refetch, classes]
};