import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useUsers from '../../../../hooks/useUsers';
import { FaTrashAlt } from 'react-icons/fa';
import { GiTeacher } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [refetch, users] = useUsers();


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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
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
    };


    const handleMakeAdmin = user => {
        console.log(user);
        Swal.fire({
            title: `Do You Want to make "${user?.name}" an Admin`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user?.name} is an Admin Now`,
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    };

    const handleMakeInstructor = user => {
        Swal.fire({
            title: `Do You Want to make " ${user?.name}" an Instructor`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Instructor!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/instructor/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user?.name} is an Instructor Now`,
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        })
            .catch(error => {
                console.error('Error making instructor:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update role',
                });
            })
    };

    return (
        <div className='w-full mx-16'>
            <div className='flex flex-col justify-center items-center py-7'>
                <p
                    className='text-[#0f172b] font-semibold md:text-xl text-center bg-[#9bcaf5] px-6 py-2 mb-3 rounded-full italic'>Users catalog editor</p>
                <h3 className='w-full md:w-1/2 font-bold text-center text-4xl md:text-5xl'>Manage Users</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user?.role === 'admin' ?
                                        'admin' : user?.role === 'instructor' ? 'Instructor'
                                            : <div className='flex items-center gap-6'>
                                                <button className='cursor-pointer tooltip' data-tip="Make Admin">
                                                    <FaUsers
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className='text-3xl'></FaUsers>
                                                </button>
                                                <button className='cursor-pointer tooltip' data-tip="Make Instructor">
                                                    <GiTeacher
                                                        onClick={() => handleMakeInstructor(user)}
                                                        className='text-3xl'></GiTeacher>
                                                </button>
                                            </div>
                                    }
                                </td>
                                <td className='flex'>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-ghost btn-lg tooltip" data-tip="Delete"
                                    >
                                        <FaTrashAlt className='text-red-600 text-2xl' />
                                    </button>
                                </td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;