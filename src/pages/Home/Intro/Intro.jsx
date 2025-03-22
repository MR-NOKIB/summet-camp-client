import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LiaUsersSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import introImg1 from "../../../assets/images/intro/intro_img-1.jpg"

const Intro = () => {
    return (
        <div className='w-[100vw] md:w-full ]'>
            <SectionTitle
                subHeading="Discover The Difference"
                heading="Discover Magic Of Our Kid's Experience"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-4 md:p-0'>
                <div className='bg-slate-100 rounded-md text-slate-900 p-10 border border-[#D4D4D8]'>
                    <div className='w-20 h-20 rounded-full bg-[#c4dff9] flex items-center justify-center mb-6'>
                        <AiFillSafetyCertificate className='text-[#6cadee] text-6xl' />
                    </div>
                    <h3 className='text-3xl font-bold mb-6'>Safe Environment</h3>
                    <p className='text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos dolorem et nemo praesentium quas consectetur quidem, vero deleniti voluptatem.</p>
                    <Link className='text-xl font-semibold'>Know More {">"}</Link>
                </div>

                <div className='bg-slate-100 rounded-md text-slate-900 p-10 border border-[#D4D4D8]'>
                    <div className='w-20 h-20 rounded-full bg-[#c4dff9] flex items-center justify-center mb-6'>
                        <LiaUsersSolid className='text-[#6cadee] text-6xl' />
                    </div>
                    <h3 className='text-3xl font-bold mb-6'>Engaging Curriculum</h3>
                    <p className='text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos dolorem et nemo praesentium quas consectetur quidem, vero deleniti voluptatem.</p>
                    <Link className='text-xl font-semibold'>Know More {">"}</Link>
                </div>

                <div className='bg-slate-100 rounded-md text-slate-900 p-10 border border-[#D4D4D8]'>
                    <div className='w-20 h-20 rounded-full bg-[#c4dff9] flex items-center justify-center mb-6'>
                        <FaUserTie className='text-[#6cadee] text-5xl' />
                    </div>
                    <h3 className='text-3xl font-bold mb-6'>Expert Instructors</h3>
                    <p className='text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos dolorem et nemo praesentium quas consectetur quidem, vero deleniti voluptatem.</p>
                    <Link className='text-xl font-semibold'>Know More {">"}</Link>
                </div>
            </div>

            <div className='mt-20 md:flex gap-10'>
                <div className='md:w-1/2 pr-6 md:box-content'>
                    <img className='max-w-[100vw] p-4 md:p-0 rounded-xl md:border-y-8 border-slate-800' src={introImg1} alt="" />
                </div>

                <div className='md:w-1/2 flex flex-col items-start px-8 justify-center'>
                    <p
                        className='text-[#0f172b] font-semibold md:text-xl bg-[#9bcaf5] px-6 py-2 mb-3 rounded-full'>About Focus Frame Camp</p>
                    <h3 className='w-full text-4xl md:text-5xl  pb-6'>Empowering Children's <br /> Inspiring Future</h3>

                    <p className='mb-6 text-lg'>
                        At Focus Frame Camp, we believe every child has a unique perspective to share. Our summer camp is designed to ignite creativity and build confidence through the art of photography. From mastering camera basics to exploring advanced editing, we provide a hands-on, inclusive environment where young photographers thrive. Join us and watch your child’s creativity come to life!
                    </p>
                    <ul className='text-lg flex flex-col gap-3'>
                        <li>
                            <IoMdCheckmarkCircle className='inline mr-2 text-3xl text-[#6cadee]' />
                            Hands-on lessons in nature, portraits, and storytelling
                        </li>
                        <li>
                            <IoMdCheckmarkCircle className='inline mr-2 text-3xl text-[#6cadee]' />
                            Professional mentors guide every step of the way
                        </li>
                        <li>
                            <IoMdCheckmarkCircle className='inline mr-2 text-3xl text-[#6cadee]' />
                            A summer of fun, learning, and unforgettable memories
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Intro;