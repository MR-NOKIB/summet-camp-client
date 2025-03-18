import React from 'react';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo-bootcamp.webp'

const Navbar = () => {
    const navOptions = <>
        <li className='text-[16px] font-semibold'><ActiveLink to="/" >Home</ActiveLink></li>
        <li className='text-[16px] font-semibold'><ActiveLink to="/about" >About Us</ActiveLink></li>
        <li className='text-[16px] font-semibold'><ActiveLink to="/classes" >Classes</ActiveLink></li>
        <li className='text-[16px] font-semibold'><ActiveLink to="/instructors" >Instructors</ActiveLink></li>
        <li className='text-[16px] font-semibold'><ActiveLink to="/dashboard" >Dashboard</ActiveLink></li>
    </>
    return (
        <div className="fixed top-0 z-10 md:w-[1450px] navbar bg-slate-900 shadow-sm justify-center text-[#E2E8F0]">
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
                    <img className='h-[45px] w-[80px] md:h-[50px] md:w-[120px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <button className="navbar-end">
                <Link to="/login" className='bg-[#00C1A2] font-semibold text-[19px] text-white px-4 py-2 rounded-md'>Login</Link>
            </button>
        </div>
    );
};

export default Navbar;