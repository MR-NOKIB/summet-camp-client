import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SuccessPayment = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const clearCart = async () => {
            try {
                // Delete all cart items for the current user
                const res = await axiosSecure.delete(`/carts/clear/${user.email}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment Successful!",
                        text: "Your cart has been cleared.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            } catch (error) {
                console.error('Error clearing cart:', error);
            }
        };

        if (user?.email) {
            clearCart();
        }

        // Redirect to dashboard after 2 seconds
        const timer = setTimeout(() => {
            navigate('/dashboard');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, user?.email, axiosSecure]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p className="mb-4">Thank you for your purchase.</p>
                <p className="text-gray-600">Redirecting to dashboard...</p>
            </div>
        </div>
    );
};

export default SuccessPayment;