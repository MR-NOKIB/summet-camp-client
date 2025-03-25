import React from 'react';
import useCart from '../../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MySelectedClasses = () => {
    const [refetch, cart] = useCart();
    const axiosSecure = useAxiosSecure();
    console.log(cart);

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
                        if (res.data.deletedCount > 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully Deleted",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    return (
        <div className='w-full pl-16'>
            <h2 className="text-3xl text-center mb-10">My Selected Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th> </th>
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