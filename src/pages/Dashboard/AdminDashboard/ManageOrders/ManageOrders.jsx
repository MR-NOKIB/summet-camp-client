import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageOrders = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const [payments, setPayments] = useState([]);

    const { data = [], isLoading } = useQuery({
        queryKey: ['all-payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-payments');
            setPayments(res.data);
            return res.data;
        }
    });

    const handleStatusChange = async (paymentId, newStatus) => {
        // Optimistically update UI
        setPayments((prevPayments) =>
            prevPayments.map((payment) =>
                payment._id === paymentId ? { ...payment, status: newStatus } : payment
            )
        );

        try {
            console.log('Updating payment status:', { paymentId, newStatus });
            const res = await axiosSecure.patch(`/payment-status/${paymentId}`, { status: newStatus });
            console.log('Server response:', res.data);
            
            if (res.data.modifiedCount > 0) {
                await Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Status Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                queryClient.invalidateQueries(['all-payments']); // Ensures data is refreshed
            } else {
                throw new Error('No changes were made to the payment status');
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
            // Revert the optimistic update
            setPayments((prevPayments) =>
                prevPayments.map((payment) =>
                    payment._id === paymentId ? { ...payment, status: payment.status } : payment
                )
            );
            
            await Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to Update Status",
                text: error.response?.data?.message || error.message || "Please try again",
                footer: error.response?.data?.error || "No additional error details available",
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
        <div className="pl-16">
            <h2 className="text-3xl text-center mb-10">Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th className="w-[150px]">Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div>
                                        <p className="font-semibold">{payment.name}</p>
                                        <p className="text-sm text-gray-500">{payment.email}</p>
                                    </div>
                                </td>
                                <td className="w-[150px]">
                                    <div className="w-[150px]">{payment.paymentDate
                                        ? moment(payment.paymentDate).format('MMM DD YYYY')
                                        : 'Pending'}</div>
                                </td>
                                <td className="h-full">{payment.transactionId}</td>
                                <td className="">${payment.totalPrice}</td>
                                <td className="">
                                    {
                                        payment.status === 'completed' ? <span className="badge badge-success">Completed</span> :
                                            <select
                                                className="select select-bordered w-[150px] max-w-xs"
                                                value={payment.status}
                                                onChange={(e) => handleStatusChange(payment._id, e.target.value)}
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;