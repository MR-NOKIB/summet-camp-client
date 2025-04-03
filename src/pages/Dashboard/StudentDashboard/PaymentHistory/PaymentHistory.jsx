import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";
import useAdmin from "../../../../hooks/useAdmin";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['payment-history', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history/${user.email}`);
            return res.data;
        }
    });

    const handleStatusChange = async (paymentId, newStatus) => {
        try {
            const res = await axiosSecure.patch(`/payment-status/${paymentId}`, { status: newStatus });
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Status Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to Update Status",
                showConfirmButton: true
            });
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner w-[40px]"></span>
            </div>
        );
    }

    return (
        <div className="w-full px-16">
            <h2 className="text-3xl text-center mb-10">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Item Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {payment.paymentDate 
                                        ? moment(payment?.paymentDate).format('mm dd yyyy')
                                        : 'Pending'}
                                </td>
                                <td>{payment.transactionId}</td>
                                <td>${payment.totalPrice}</td>
                                <td>
                                    {isAdmin ? (
                                        <select 
                                            className="select select-bordered w-full max-w-xs"
                                            value={payment.status}
                                            onChange={(e) => handleStatusChange(payment._id, e.target.value)}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    ) : (
                                        <span className={`badge ${
                                            payment.status === 'completed' 
                                                ? 'badge-success' 
                                                : payment.status === 'cancelled'
                                                ? 'badge-error'
                                                : 'badge-warning'
                                        }`}>
                                            {payment.status}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    <details className="dropdown">
                                        <summary className="btn btn-xs">View Items</summary>
                                        <ul className="flex flex-col p-2 shadow menu z-[1] bg-base-100 rounded-box w-52">
                                            {payment.cartItems?.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="text-sm">{item.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory; 