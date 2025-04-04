import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useClasses } from '../../../../hooks/useClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';

const ManageClasses = () => {
    const [refetch, classes] = useClasses();
    // console.log(classes);
    const axiosSecure = useAxiosSecure();

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
                    axiosSecure.delete(`/classes/${id}`)
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
        }

    return (
        <div className='w-full mx-16'>
            <div className='flex flex-col justify-center items-center py-7'>
                <p
                    className='text-[#0f172b] font-semibold md:text-xl text-center bg-[#9bcaf5] px-6 py-2 mb-3 rounded-full italic'>Class catalog editor</p>
                <h3 className='w-full md:w-1/2 font-bold text-center text-4xl md:text-5xl'>Manage Classes</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes && classes.map((classData, index) => <tr
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

export default ManageClasses;