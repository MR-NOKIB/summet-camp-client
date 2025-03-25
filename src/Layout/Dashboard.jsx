import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaBookmark, FaHome, FaListUl, FaUsers } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import logo from  '../assets/images/logo/logo-bootcamp.webp'

const Dashboard = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='h-screen w-[350px] bg-[#0F172B]'>
                <img className='h-[60px] w-[120px] ml-6 mt-6 mb-3' src={logo} alt="" />
                <ul className='text-lg flex flex-col gap-5 px-6'>
                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2 w-full'>
                        <MdOutlineManageAccounts className='text-2xl' />
                        <Link to="/dashboard/manageClasses" >ManageClasses</Link>
                    </li>

                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaUsers className='text-2xl' />
                        <Link to="/dashboard/manageUsers" >Manage Users</Link>
                    </li>
                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaListUl />
                        <Link to="/dashboard/insMyClasses" >My Added Classes</Link>
                    </li>
                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <IoAdd />
                        <Link to="/dashboard/addClass" >Add Class</Link>
                    </li>
                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaListUl />
                        <Link to="/dashboard/myEnrolledClasses" >My Enrolled Classes</Link>
                    </li>
                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaBookmark />
                        <Link to="/dashboard/selectedClasses" >My Selected Classes</Link>
                    </li>
                    <li className='text-xl hover:bg-[#264382] hover:text-white pb-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <MdPayment />
                        <Link to="/dashboard/payment" >Payment</Link>
                    </li>

                    <div className="divider"></div>

                    <li className='text-xl hover:bg-[#264382] hover:text-white pb-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaHome />
                        <Link to="/" >Home</Link>
                    </li>

                    <li className='text-xl hover:bg-[#264382] hover:text-white py-2 px-3 rounded text-slate-600 flex items-center gap-2'>
                        <FaListUl />
                        <Link to="/Classes" >Classes</Link>
                    </li>
                </ul>
            </div>

            <div className='w-full flex flex-col items-center pt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;