import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaBookmark, FaHome, FaListUl, FaUsers } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import logo from '../assets/images/logo/logo-bootcamp.webp'
import useAdmin from '../hooks/useAdmin';
import useIsInstructor from '../hooks/useIsInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useIsInstructor();
    console.log(isInstructor);
    return (
        <div className='flex min-h-screen md:max-w-[1450px] mx-auto pb-10'>
            <div className='w-[350px] bg-[#0F172B]'>
                <img className='h-[60px] w-[120px] ml-6 mt-6 mb-3' src={logo} alt="" />
                <ul className='text-lg flex flex-col gap-5 px-6'>
                    {
                        isAdmin ? <>
                            <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2 w-full'>
                                <MdOutlineManageAccounts className='text-2xl' />
                                <Link className='w-full h-full' to="/dashboard/manageClasses" >ManageClasses</Link>
                            </li>

                            <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                <FaUsers className='text-2xl' />
                                <Link className='w-full h-full' to="/dashboard/manageUsers" >Manage Users</Link>
                            </li>

                            <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                <IoAdd />
                                <Link className='w-full h-full' to="/dashboard/addClass" >Add Class</Link>
                            </li>
                        </> : isInstructor ?
                            <>
                                <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                    <FaListUl />
                                    <Link className='w-full h-full' to="/dashboard/insMyClasses" >My Added Classes</Link>
                                </li>

                                <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                    <IoAdd />
                                    <Link className='w-full h-full' to="/dashboard/addClass" >Add Class</Link>
                                </li>
                            </> :
                            <>
                                <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                    <FaListUl />
                                    <Link className='w-full h-full' to="/dashboard/myEnrolledClasses" >My Enrolled Classes</Link>
                                </li>
                                <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                    <FaBookmark />
                                    <Link className='w-full h-full' to="/dashboard/selectedClasses" >My Selected Classes</Link>
                                </li>
                                <li className='text-xl hover:bg-[#264382] hover:text-white pb-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                                    <MdPayment />
                                    <Link className='w-full h-full' to="/dashboard/payment" >Payment</Link>
                                </li>
                            </>
                    }
                    <div className="divider divider-neutral "></div>

                    <li className='text-xl hover:bg-[#264382] hover:text-white pb-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaHome />
                        <Link className='w-full h-full' to="/" >Home</Link>
                    </li>

                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaListUl />
                        <Link className='w-full h-full' to="/Classes" >Classes</Link>
                    </li>
                </ul>
            </div>

            <div className='w-full items-center pt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;