import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"


export const useInstructors = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/instructors')
            return res.data;
        }
    })
    return [refetch, instructors]
};