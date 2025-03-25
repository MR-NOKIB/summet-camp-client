import React from 'react';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo-bootcamp.webp'
import useAuth from '../../../hooks/useAuth';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const navOptions = <>
        <li className='text-[16px] font-semibold rounded text-slate-600 hover:bg-[#264382] hover:text-white'><ActiveLink to="/" >Home</ActiveLink></li>
        <li className='text-[16px] font-semibold rounded text-slate-600 hover:bg-[#264382] hover:text-white'><ActiveLink to="/classes" >Classes</ActiveLink></li>
        <li className='text-[16px] font-semibold rounded text-slate-600 hover:bg-[#264382] hover:text-white'><ActiveLink to="/instructors" >Instructors</ActiveLink></li>
        <li className='text-[16px] font-semibold rounded text-slate-600 hover:bg-[#264382] hover:text-white'><ActiveLink to="/dashboard" >Dashboard</ActiveLink></li>
    </>

    return (
        <div className="fixed top-0 z-10 md:w-[1450px] navbar bg-slate-900 shadow-sm justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className=''>
                    <img className='h-[45px] w-[80px] md:h-[50px] md:w-[100px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            {
                user ? <div className='navbar-end mr-4 items-center gap-6'>
                    <span className='flex items-center gap-2'>
                        <FaUserCircle className='inline text-4xl mr-1' /> {user.displayName}
                    </span>
                    <button
                        onClick={handleLogOut}
                        className='bg-linear-to-r from-[#498ee8] to-[#3472dc] hover:bg-gradient-to-r hover:from-[#3472dc] hover:to-[#2b5eca] border border-[#2b5eca] hover:border-[#294da4] font-semibold text-[19px] text-white px-5 py-2 rounded-md'>
                        Log Out
                    </button>
                </div>
                    : <button className="navbar-end mr-4">
                        <Link to="/login" className='bg-linear-to-r from-[#498ee8] to-[#3472dc] hover:bg-gradient-to-r hover:from-[#3472dc] hover:to-[#2b5eca] border border-[#2b5eca] hover:border-[#294da4] font-semibold text-[19px] text-white px-5 py-2 rounded-md '>Login</Link>
                    </button>
            }
        </div>
    );
};

export default Navbar;