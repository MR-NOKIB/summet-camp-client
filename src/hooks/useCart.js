import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [refetch, cart];
};

export default useCart;