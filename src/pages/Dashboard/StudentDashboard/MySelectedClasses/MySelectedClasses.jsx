import React from 'react';
import useCart from '../../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Button from '../../../../Components/Buttons/Button';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAuth from '../../../../hooks/useAuth';

const MySelectedClasses = () => {
    const [refetch, cart] = useCart();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const {user} = useAuth();
    // console.log(cart);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully Deleted",
                                icon: "success",
                                iconColor: "#6cadee"
                            });
                        }
                        refetch();
                    })
            }
        });
    };

    const handleMakePayment = async () => {
        try {
            if (!totalPrice || isNaN(totalPrice) || totalPrice <= 0) {
                console.error('Invalid Price:', totalPrice);
                alert('Error: Total price is invalid or missing.');
                return;
            }

            // Prepare order info with additional required fields
            const orderInfo = {
                price: totalPrice,
                email: user.email,
                name: user.displayName,
                cartItems: cart.map(item => ({
                    classId: item.classId,
                    title: item.title,
                    price: item.price,
                    image: item.image
                }))
            };

            // console.log('Sending orderInfo:', orderInfo);

            const res = await axiosPublic.post('/create-checkout-session', orderInfo);

            if (!res.data || !res.data.url) {
                console.error('Invalid response from server:', res.data);
                alert('Error: Invalid response from payment server.');
                return;
            }

            window.location.href = res.data.url;

        } catch (error) {
            console.error('Payment process failed:', error);
            if (error.response) {
                console.error('Server response:', error.response.data);
                alert(`Error: ${error.response.data.error || 'Payment request failed'}`);
            } else {
                alert('Error: Unable to process payment.');
            }
        }
    };


    
    return (
        <div className='w-full px-16'>
            <h2 className="text-3xl text-center mb-10">My Selected Classes</h2>

            <div className='flex justify-between items-center mb-3'>
                <div>
                    <h3 className='text-2xl'>Total: $
                        <span className='text-[#498ee8] ml-0.5'>{totalPrice}</span>
                    </h3>
                </div>
                <Button css="" click={handleMakePayment}>Pay</Button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart && cart.map((classData, index) => <tr
                                key={classData._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <img className='h-[70px]' src={classData.image} alt="" />
                                </td>
                                <td>
                                    {classData.title}
                                </td>
                                <td>
                                    $ {classData.price}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(classData._id)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <FaTrashAlt className='text-red-600 text-2xl' />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;