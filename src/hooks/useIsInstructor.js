import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsInstructor = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isInstructor, isPending: isInstructorLoading} = useQuery({
        queryKey: [user?.email, 'isInstructor'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure(`/users/instructor/${user.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading ]
};

export default useIsInstructor;