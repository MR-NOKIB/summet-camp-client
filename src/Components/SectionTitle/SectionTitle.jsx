import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='flex flex-col justify-center items-center my-8'>
            <p 
            className='text-[#FACC15] md:text-xl text-center bg-slate-800 px-6 py-2 mb-3 rounded-full italic'>{subHeading}</p>
            <h3 className='w-full md:w-1/2 font-bold text-center text-4xl md:text-5xl  pb-6'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;