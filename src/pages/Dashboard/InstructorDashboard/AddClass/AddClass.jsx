import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Button from '../../../../Components/Buttons/Button';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const AddClass = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        const { classTitle, description, instructorName, price, seats } = data;
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const newClass = {
                title: classTitle,
                description,
                image: res.data.data.display_url,
                instructor: instructorName,
                insEmail: user.email,
                price: parseInt(price),
                availableSeats: parseInt(seats)
            };

            const classRes = await axiosSecure.post('/classes', newClass);
            console.log(classRes.data);
            if (classRes.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "successfully added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div className='pl-20'>
            <div className='flex flex-col justify-center items-center py-7'>
                <p
                    className='text-[#0f172b] font-semibold md:text-xl text-center bg-[#9bcaf5] px-6 py-2 mb-3 rounded-full italic'>What's New</p>
                <h3 className='w-full md:w-1/2 font-bold text-center text-4xl md:text-5xl'>Add A Class</h3>
            </div>

            {/* Add Class Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='p-10 rounded-xl shadow-lg shadow-[#264382] border border-[#F1F5F9] mb-10'>
                <fieldset className=" text-lg">
                    <legend className="fieldset-legend">Class Title *</legend>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Type here"
                        {...register("classTitle", {
                            required: 'Class title is required',
                            type: 'text'
                        })} />
                    {errors.classTitle && <span className="text-red-500">{errors.classTitle.message}</span>}
                </fieldset>

                <fieldset className="fieldset text-lg">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea
                        className="textarea h-24 w-full"
                        placeholder="Type Description"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault(); // Prevent Enter key
                            }
                        }}
                        {...register("description", {
                            required: 'Description Is required'
                        })}
                    ></textarea>
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                </fieldset>

                <div className='flex gap-6 items-center'>
                    <fieldset className="fieldset text-lg w-1/2">
                        <legend className="fieldset-legend">Price</legend>
                        <input
                            type="number"
                            className="input w-full"
                            placeholder="Price"
                            min="0"
                            onInput={(e) => {
                                if (e.target.value < 0) e.target.value = 0;
                            }}
                            {...register("price", {
                                required: 'Price is required'
                            })}
                        />
                        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    </fieldset>

                    <fieldset className="fieldset text-lg w-1/2">
                        <legend className="fieldset-legend">Available Seats</legend>
                        <input
                            type="number"
                            className="input w-full"
                            placeholder="Available Seats"
                            min="0"
                            onInput={(e) => {
                                if (e.target.value < 0) e.target.value = 0;
                            }}
                            {...register("seats", {
                                required: 'Invalid number'
                            })}
                        />
                        {errors.seats && <span className="text-red-500">{errors.seats.message}</span>}
                    </fieldset>
                </div>
                <fieldset className="fieldset text-lg">
                    <legend className="fieldset-legend">Instructor Name</legend>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Instructor Name"
                        {...register("instructorName", {
                            required: 'Instructor name is required'
                        })}
                    />
                    {errors.instructorName && <span className="text-red-500">{errors.instructorName.message}</span>}
                </fieldset>
                <fieldset className="fieldset text-lg">
                    <legend className="fieldset-legend">Class Image*</legend>
                    <input
                        type="file"
                        className="file-input"
                        {...register("image", {
                            required: 'Image is required!'
                        })}
                    />
                    {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                </fieldset>

                <div className='flex justify-center mt-5'>
                    <Button>
                        Add Class
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;